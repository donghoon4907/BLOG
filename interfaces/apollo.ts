import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { NextPageContext } from "next";

export interface ApolloContext extends NextPageContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
