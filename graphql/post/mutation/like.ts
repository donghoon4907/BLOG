import { gql } from "@apollo/client";
/**
 * * 좋아요 / 좋아요 취소
 */
export const likeMutation = gql`
  mutation likePost($postId: String!) {
    likePost(postId: $postId)
  }
`;
