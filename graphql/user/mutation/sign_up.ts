import { gql } from "@apollo/client";

/**
 * * 회원가입
 *
 * @mutation
 * @author frisk
 * @param $email 이메일
 * @param $nickname 별칭
 * @param $file 프로필 사진
 */
export const SIGN_UP = gql`
  mutation SignUp($email: String!, $nickname: String!, $file: String!) {
    createUser(email: $email, nickname: $nickname, file: $file)
  }
`;
