import { gql } from "@apollo/client";

/**
 * * 댓글 검색
 *
 * @query
 * @author frisk
 * @param $skip 건너뛸 목록의 수
 * @param $first 요청 목록의 수
 * @param $orderBy 정렬
 * @param $postId 게시물 ID
 */
export const GET_COMMENTS = gql`
  query GetComments(
    $skip: Int
    $first: Int
    $orderBy: String
    $postId: String
  ) {
    comments(skip: $skip, first: $first, orderBy: $orderBy, postId: $postId) {
      data {
        id
        user {
          id
          nickname
          avatar {
            url
          }
        }
        post {
          id
          commentCount
        }
        content
        createdAt
        updatedAt
      }
      total
    }
  }
`;
