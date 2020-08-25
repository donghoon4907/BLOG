import { gql } from "@apollo/client";
/**
 * * Search Page에서 호출 쿼리 목록
 */
export const searchQuery = gql`
  query feed($skip: Int, $first: Int, $keyword: String, $orderBy: String) {
    getPosts(
      skip: $skip
      first: $first
      searchKeyword: $keyword
      orderBy: $orderBy
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
    getUsers(skip: $skip, first: $first, nickname: $keyword) {
      id
      nickname
      email
      avatar {
        url
      }
      isMaster
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        id
      }
    }
    getRecommandUsers {
      id
      nickname
      email
      avatar {
        url
      }
      isMaster
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        id
      }
    }
  }
`;
