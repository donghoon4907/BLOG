import { gql } from "@apollo/client";
/**
 * * Index Page에서 호출 쿼리 목록
 */
export const feedQuery = gql`
  query feed($skip: Int, $first: Int) {
    getPosts(skip: $skip, first: $first) {
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
    getNotices(skip: $skip, first: $first) {
      id
      title
      description
      createdAt
      updatedAt
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
