import { gql } from "@apollo/client";

/**
 * * 공지사항 추가
 *
 * @mutation
 * @author frisk
 * @param $title 제목
 * @param $description 내용
 */
export const CREATE_NOTICE = gql`
  mutation CreateNotice($title: String!, $description: String!) {
    createNotice(title: $title, description: $description)
  }
`;
