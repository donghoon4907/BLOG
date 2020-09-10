import { gql } from "@apollo/client";

/**
 * * 포스트 검색
 *
 * @query
 * @author frisk
 * @param $skip 건너뛸 목록의 수
 * @param $first 요청 목록의 수
 * @param $orderBy 정렬
 * @param $query 검색어
 */
export const GET_POSTS = gql`
  query GetPosts($skip: Int, $first: Int, $orderBy: String, $query: String) {
    posts(skip: $skip, first: $first, orderBy: $orderBy, query: $query) {
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
    }
  }
`;
