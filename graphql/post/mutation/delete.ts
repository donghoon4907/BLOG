import { gql } from "@apollo/client";

/**
 * * 게시물 삭제
 *
 * @mutation
 * @author frisk
 * @param $id 게시물 ID
 */
export const DELETE_POST = gql`
  mutation DeletePost($id: String!) {
    deletePost(id: $id)
  }
`;
