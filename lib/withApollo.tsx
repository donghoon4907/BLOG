import React from "react";
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
import { getMainDefinition } from "@apollo/client/utilities";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from "jwt-decode";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Head from "next/head";
import { getAccessToken, setAccessToken } from "./token";
import isBrowser from "./isBrowser";

export function withApollo(PageComponent: any) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }: any) => {
    const client = apolloClient || initApolloClient(apolloState);
    return <PageComponent {...pageProps} apolloClient={client} />;
  };

  if (process.env.NODE_ENV !== "production") {
    // Find correct display name
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    // Warn if old way of installing apollo is used
    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    // Set correct display name for devtools
    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (!isBrowser || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (context: any) => {
      const {
        AppTree,
        ctx: { res }
      } = context;

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apolloClient = (context.ctx.apolloClient = initApolloClient({}));

      const pageProps = PageComponent.getInitialProps
        ? await PageComponent.getInitialProps(context)
        : {};

      // Only on the server
      if (!isBrowser) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (res && res.finished) {
          return {};
        }

        if (!isBrowser) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import("@apollo/react-ssr");
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient
                }}
                apolloClient={apolloClient}
              />
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error("Error while running `getDataFromTree`", error);
          }
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState
      };
    };
  }

  return WithApollo;
}

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */
function createApolloClient(initialState: any = {}) {
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

  const refreshLink = new TokenRefreshLink({
    accessTokenField: "accessToken",
    isTokenValidOrUndefined: () => {
      const token = getAccessToken();

      if (!token) {
        return true;
      }

      try {
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) {
          return false;
        } else {
          return true;
        }
      } catch {
        return false;
      }
    },
    fetchAccessToken: () => {
      const token = getAccessToken();

      return fetch(`${process.env.BACKEND_API_PATH}/refresh_token`, {
        method: "POST",
        headers: {
          Authentication: `Bearer ${token}`
        }
      });
    },
    handleFetch: accessToken => {
      setAccessToken(accessToken);
    },
    handleError: err => {
      console.error(err);
      Router.replace("/login");
    }
  });

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
    const token = getAccessToken();
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
      }
    };
  });

  const link = [errorLink, authLink, isBrowser ? httpLink : splitLink];

  if (isBrowser) {
    link.unshift(refreshLink);
  }

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    //link: errorLink.concat(authLink.concat(isBrowser ? httpLink : splitLink)),
    link: ApolloLink.from(link),
    cache: new InMemoryCache().restore(initialState)
  });
}

// export function initializeApollo(initialState: any, options: Options) {
//   // Make sure to create a new client for every server-side request so that data
//   // isn't shared between connections (which would be bad)
//   if (!isBrowser) {
//     return createApolloClient(initialState, options);
//   }

//   // Reuse client on the client-side
//   if (!apolloClient) {
//     apolloClient = createApolloClient(initialState, options);
//   }

//   return apolloClient;
// }

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
function initApolloClient(initialState: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return createApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    // setAccessToken(cookie.parse(document.cookie).test);
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}
