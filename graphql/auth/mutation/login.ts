import { gql } from "@apollo/client";

export const logInMutation = gql`
  mutation logIn($email: String!, $pwd: String!) {
    logIn(email: $email, pwd: $pwd)
  }
`;
