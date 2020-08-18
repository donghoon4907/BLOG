import { gql } from "@apollo/client";

export const postsQuery = gql`
  query getPosts(
    $skip: Int
    $first: Int
    $orderBy: String
    $searchKeyword: String
  ) {
    getPosts(
      skip: $skip
      first: $first
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
      id
      title
      description
      createdAt
      user {
        id
        nickname
        avatar {
          url
        }
      }
      video {
        url
      }
      likes {
        user {
          id
        }
      }
      status
      room {
        id
      }
    }
  }
`;
