import { gql } from "@apollo/client";

/**
 * * 댓글 수정
 *
 * @mutation
 * @author frisk
 * @param $id ID
 * @param $content 내용
 */
export const UPDATE_COMMENT = gql`
  mutation UpdateComment($id: String!, $content: String!) {
    updateComment(id: $id, content: $content)
  }
`;
