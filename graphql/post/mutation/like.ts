import { gql } from "@apollo/client";

/**
 * * 게시물 좋아요 / 좋아요 취소
 *
 * @mutation
 * @author frisk
 * @param $id 게시물 ID
 */
export const LIKE_POST = gql`
  mutation LikePost($id: String!) {
    likePost(id: $id)
  }
`;
