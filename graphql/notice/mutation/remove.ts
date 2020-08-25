import { gql } from "@apollo/client";
/**
 * * 공지사항 삭제
 */
export const removeNoticeMutation = gql`
  mutation deleteNotice($noticeId: String!) {
    deleteNotice(noticeId: $noticeId)
  }
`;
