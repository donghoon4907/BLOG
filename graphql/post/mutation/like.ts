import { gql } from "@apollo/client";

export const likeMutation = gql`
  mutation likePost($postId: String!) {
    likePost(postId: $postId)
  }
`;
