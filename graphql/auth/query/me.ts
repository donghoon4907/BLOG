import { gql } from "@apollo/client";
import { Avatar } from "../../../interfaces"

export interface Me {
  id: string;
  nickname: string;
  email: string;
  avatar: Avatar;
  isMaster: boolean;
}

export interface MeData {
  getMyProfile: Me;
}

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
