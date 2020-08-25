import { gql } from "@apollo/client";

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
