import { gql } from "@apollo/client";

export const noticesQuery = gql`
  query getNotices(
    $skip: Int
    $first: Int
    $orderBy: String
    $searchKeyword: String
  ) {
    getNotices(
      skip: $skip
      first: $first
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
