import { gql } from "@apollo/client";

export const syncMessageSubscription = gql`
  subscription syncMessage($roomId: String!) {
    syncMessage(roomId: $roomId) {
      id
      content
      createdAt
      updatedAt
      from {
        id
        nickname
        email
        avatar {
          url
        }
      }
    }
  }
`;
