import { gql } from "@apollo/client";

export const signUpMutation = gql`
  mutation addUser(
    $email: String!
    $pwd: String!
    $nickname: String!
    $file: String!
  ) {
    addUser(email: $email, pwd: $pwd, nickname: $nickname, file: $file)
  }
`;
