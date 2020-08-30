import { gql } from "@apollo/client";
/**
 * * 공지사항 수정
 */
export const updateNoticeMutation = gql`
  mutation updateNotice(
    $noticeId: String!
    $title: String!
    $description: String!
  ) {
    updateNotice(noticeId: $noticeId, title: $title, description: $description)
  }
`;
