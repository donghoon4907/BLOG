import { gql } from "@apollo/client";

export const keywordQuery = gql`
  query getSearchKeyword(
    $skip: Int
    $first: Int
    $orderBy: String
    $searchKeyword: String!
  ) {
    getSearchKeyword(
      skip: $skip
      first: $first
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
      id
      keyword
    }
  }
`;
