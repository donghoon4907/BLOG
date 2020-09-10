import { gql } from "@apollo/client";

/**
 * * 사용자 검색
 *
 * @query
 * @author frisk
 * @param $skip 건너뛸 목록의 수
 * @param $first 요청 목록의 수
 * @param $orderBy 정렬
 * @param $query 검색어
 */
export const GET_USERS = gql`
  query GetUsers($skip: Int, $first: Int, $query: String, $orderBy: String) {
    users(skip: $skip, first: $first, query: $query, orderBy: $orderBy) {
      id
      nickname
      isMaster
      createdAt
      updatedAt
      avatar {
        url
      }
    }
  }
`;

/**
 * * 사용자 상세 조회
 *
 * @query
 * @author frisk
 * @param $id 사용자 ID
 */
export const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
      nickname
      isMaster
      createdAt
      updatedAt
      avatar {
        url
      }
    }
  }
`;

/**
 * * 추천 사용자 목록 조회
 *
 * @query
 * @author frisk
 * @param $skip 건너뛸 목록의 수
 * @param $first 요청 목록의 수
 */
export const GET_RECOMAND_USERS = gql`
  query GetRecommandUsers($skip: Int, $first: Int!) {
    recommandUsers: users(
      skip: $skip
      first: $first
      orderBy: "postCount_DESC"
    ) {
      id
      nickname
      isMaster
      createdAt
      updatedAt
      postCount
      avatar {
        url
      }
    }
  }
`;
