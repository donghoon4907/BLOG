import { gql } from "@apollo/client";

export const addMessageMutation = gql`
  mutation addMessage($content: String!, $roomId: String, $to: String) {
    addMessage(content: $content, roomId: $roomId, to: $to)
  }
`;
