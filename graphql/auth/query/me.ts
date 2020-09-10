import { gql } from "@apollo/client";

/**
 * * 내 정보
 *
 * @query
 * @author frisk
 */
export const ME = gql`
  query Me {
    me {
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
