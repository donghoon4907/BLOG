import { gql } from "@apollo/client";

export const roomQuery = gql`
  query getMessageRoom($roomId: String!) {
    getMessageRoom(roomId: $roomId) {
      id
      participants {
        id
        nickname
        email
        avatar {
          url
        }
      }
      messages {
        id
        content
        createdAt
        updatedAt
        from {
          id
          nickname
          avatar {
            url
          }
        }
      }
    }
  }
`;
