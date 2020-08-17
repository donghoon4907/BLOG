import "bootstrap/dist/css/bootstrap.min.css";
import "github-markdown-css/github-markdown.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import App from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { VssProvider } from "../context";
import { withApollo } from "../lib/apollo";
import GlobalStyle from "../theme/globalStyle";
import theme from "../theme";

class AppComponent extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <VssProvider>
            <Component {...pageProps} />
          </VssProvider>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(AppComponent);
