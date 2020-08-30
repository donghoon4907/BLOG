import { gql } from "@apollo/client";
/**
 * * 포스트 추가
 */
export const addPostMutation = gql`
  mutation addPost(
    $title: String!
    $description: String
    $status: String!
    $file: String!
  ) {
    addPost(
      title: $title
      description: $description
      status: $status
      file: $file
    )
  }
`;
