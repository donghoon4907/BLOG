import { gql } from "@apollo/client";

export const logInMutation = gql`
  mutation logIn($email: String!, $pwd: String!) {
    logIn(email: $email, pwd: $pwd) {
      token
      id
      nickname
      email
      avatar {
        url
      }
      isMaster
    }
  }
`;
