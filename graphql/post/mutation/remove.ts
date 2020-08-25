import { gql } from "@apollo/client";

export const removePostMutation = gql`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;
