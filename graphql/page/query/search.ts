import { gql } from "@apollo/client";

/**
 * * Search 페이지에 필요한 정보 로드
 *
 * @query
 * @author frisk
 * @param $skip 건너뛸 목록의 수
 * @param $first 요청 목록의 수
 * @param $orderBy 정렬
 * @param $query 검색어
 */
export const GET_SEARCH = gql`
  query GetSearch($skip: Int, $first: Int, $orderBy: String, $query: String) {
    searchPost: posts(
      skip: $skip
      first: $first
      orderBy: $orderBy
      query: $query
    ) {
      id
      title
      description
      user {
        id
        nickname
        avatar {
          url
        }
      }
      likeCount
      likes {
        id
        user {
          id
        }
      }
      createdAt
      updatedAt
      viewCount
      categories {
        content
      }
      commentCount
    }
    searchUser: users(first: $first, query: $query) {
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
