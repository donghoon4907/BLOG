import { gql } from "@apollo/client";

export const removeNoticeMutation = gql`
  mutation deleteNotice($noticeId: String!) {
    deleteNotice(noticeId: $noticeId)
  }
`;
