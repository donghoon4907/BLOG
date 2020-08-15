import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
  NormalizedCacheObject
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import isBrowser from "./isBrowser";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

interface Options {
  getToken: () => string;
}

function createApolloClient(initialState: any, { getToken }: Options) {
  const httpLink = createHttpLink({
    uri: process.env.BACKEND_API_PATH
    //credentials: "include"
  });

  const wsLink = isBrowser
    ? new WebSocketLink({
        uri: `${process.env.BACKEND_WS_PATH}`,
        options: {
          reconnect: true
        }
      })
    : null;

  const splitLink = isBrowser
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink as any,
        httpLink
      )
    : httpLink;

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, path }) => {
        console.log(`[GraphQL error] Query: ${path}, ${message}`);
        const response = JSON.parse(message);
        if (isBrowser && response.status === 401) {
          Router.replace("/login");
        }
      });
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      if (isBrowser) {
        alert("서버 점검 중입니다.");
        Router.replace("/login");
      }
    }
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
        // cookie: token ? `qid=${token}` : ""
      }
    };
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: errorLink.concat(authLink.concat(isBrowser ? httpLink : splitLink)),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export function initializeApollo(initialState: any, options: Options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return createApolloClient(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState, options);
  }

  return apolloClient;
}
