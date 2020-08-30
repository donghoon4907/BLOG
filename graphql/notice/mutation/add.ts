import { gql } from "@apollo/client";
/**
 * * 공지사항 등록
 */
export const addNoticeMutation = gql`
  mutation addNotice($title: String!, $description: String!) {
    addNotice(title: $title, description: $description)
  }
`;
