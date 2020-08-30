import { gql } from "@apollo/client";
/**
 * * 사용자 검색
 */
export const usersQuery = gql`
  query users($skip: Int, $first: Int, $keyword: String, $orderBy: String) {
    getUsers(
      skip: $skip
      first: $first
      nickname: $keyword
      orderBy: $orderBy
    ) {
      id
      nickname
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

export const recommandUsersQuery = gql`
  query recommandUsers {
    getRecommandUsers {
      id
      nickname
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

export const userQuery = gql`
  query user($userId: String!) {
    getUser(userId: $userId) {
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
