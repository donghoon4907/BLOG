import { gql } from "@apollo/client";
/**
 * * 포스트 삭제
 */
export const removePostMutation = gql`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;
