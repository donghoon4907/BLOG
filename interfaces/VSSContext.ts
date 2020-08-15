import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { NextContext } from "next";

export interface VSSContext extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
