import "bootstrap/dist/css/bootstrap.min.css";
import "github-markdown-css/github-markdown.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "../context";
import { useApollo } from "../lib/apollo";
import GlobalStyle from "../theme/globalStyle";
import theme from "../theme";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
