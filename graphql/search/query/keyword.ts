import { gql } from "@apollo/client";
/**
 * * 연관 검색어 검색
 */
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
