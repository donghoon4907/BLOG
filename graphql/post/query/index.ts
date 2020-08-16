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
        isFollowing
        avatar {
          url
        }
      }
      video {
        url
      }
      status
      isLiked
      likeCount
      isMyPost
      room {
        id
      }
    }
  }
`;
