import { gql } from "@apollo/client";

export const followMutation = gql`
  mutation follow($userId: String!) {
    follow(userId: $userId)
  }
`;

export const unfollowMutation = gql`
  mutation unfollow($userId: String!) {
    unfollow(userId: $userId)
  }
`;
