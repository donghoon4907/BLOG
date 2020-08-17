import { gql } from "@apollo/client";

export const noticesQuery = gql`
  query getNotices($skip: Int, $first: Int, $orderBy: String) {
    getNotices(skip: $skip, first: $first, orderBy: $orderBy) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
