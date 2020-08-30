import { gql } from "@apollo/client";
/**
 * * 사용자 정보 로드
 */
export const meQuery = gql`
  query me {
    getMyProfile {
      id
      nickname
      email
      avatar {
        url
      }
      isMaster
      followedBy {
        id
      }
      following {
        id
      }
    }
  }
`;
