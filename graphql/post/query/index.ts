import { gql } from "@apollo/client";

/**
 * * 게시물 검색
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
      commentCount
      category
    }
  }
`;

/**
 * * 게시물 상세 로드
 *
 * @query
 * @author frisk
 * @param $id 건너뛸 목록의 수
 */
export const GET_POST = gql`
  query GetPost($id: String!) {
    post(id: $id) {
      id
      title
      description
      content
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
      category
    }
  }
`;

/**
 * * 카테고리 검색
 *
 * @query
 * @author frisk
 * @param $skip 건너뛸 목록의 수
 * @param $first 요청 목록의 수
 * @param $orderBy 정렬
 */
export const GET_CATEGORIES = gql`
  query GetCategories($skip: Int, $first: Int, $orderBy: String) {
    categories(skip: $skip, first: $first, orderBy: $orderBy) {
      id
      content
      useCount
    }
  }
`;
