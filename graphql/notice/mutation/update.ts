import { gql } from "@apollo/client";

/**
 * * 공지사항 수정
 *
 * @mutation
 * @author frisk
 * @param $id 공지사항 ID
 * @param $title 제목
 * @param $description 내용
 */
export const UPDATE_NOTICE = gql`
  mutation UpdateNotice($id: String!, $title: String!, $description: String!) {
    updateNotice(id: $id, title: $title, description: $description)
  }
`;
