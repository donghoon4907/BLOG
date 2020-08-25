import { gql } from "@apollo/client";
/**
 * * 팔로우
 */
export const followMutation = gql`
  mutation follow($userId: String!) {
    follow(userId: $userId)
  }
`;
/**
 * * 언팔로우
 */
export const unfollowMutation = gql`
  mutation unfollow($userId: String!) {
    unfollow(userId: $userId)
  }
`;
