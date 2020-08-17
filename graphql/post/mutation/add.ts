import { gql } from "@apollo/client";

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
