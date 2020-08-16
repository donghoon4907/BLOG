import { gql } from "@apollo/client";

export const updateNoticeMutation = gql`
  mutation updateNotice(
    $noticeId: String!
    $title: String!
    $description: String!
  ) {
    updateNotice(noticeId: $noticeId, title: $title, description: $description)
  }
`;
