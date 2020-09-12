import { gql } from "@apollo/client";

/**
 * * 댓글 추가
 *
 * @mutation
 * @author frisk
 * @param $postId 게시물 ID
 * @param $content 내용
 */
export const CREATE_COMMENT = gql`
  mutation CreateComment($postId: String!, $content: String!) {
    createComment(postId: $postId, content: $content)
  }
`;
