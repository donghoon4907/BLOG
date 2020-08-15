import { gql } from "@apollo/client";

export const logOutMutation = gql`
  mutation logOut {
    logOut
  }
`;
