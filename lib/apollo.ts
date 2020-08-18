import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
  NormalizedCacheObject,
  ApolloLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition, concatPagination } from "@apollo/client/utilities";
import fetch from "isomorphic-unfetch";
import isBrowser from "./isBrowser";
import { getAccessToken } from "./token";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

if (!isBrowser) {
  (global as any).fetch = fetch;
}

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: process.env.BACKEND_API_PATH
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
      });
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const authLink = setContext((_, { headers }) => {
    const token = getAccessToken();
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
      }
    };
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: ApolloLink.from([
      errorLink,
      authLink,
      isBrowser ? httpLink : splitLink
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getPosts: concatPagination()
          }
        }
      }
    })
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient || createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...(initialState as any) });
  }
  // For SSG and SSR always create a new Apollo Client
  if (!isBrowser) return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
