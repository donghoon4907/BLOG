import { gql } from "@apollo/client";
/**
 * * 포스트 수정
 */
export const updatePostMutation = gql`
  mutation updatePost(
    $postId: String!
    $title: String!
    $description: String
    $status: String!
  ) {
    updatePost(
      postId: $postId
      title: $title
      description: $description
      status: $status
    )
  }
`;
