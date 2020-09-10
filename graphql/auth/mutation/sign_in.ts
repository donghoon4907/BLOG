import { gql } from "@apollo/client";

/**
 * * 로그인
 *
 * @mutation
 * @author frisk
 * @param $email 이메일
 */
export const SIGN_IN = gql`
  mutation signIn($email: String!) {
    logIn(email: $email) {
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
