import { gql } from "@apollo/client";

/**
 * * 댓글 삭제
 *
 * @mutation
 * @author frisk
 * @param $id ID
 */
export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: String!) {
    deleteComment(id: $id)
  }
`;
