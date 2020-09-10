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
export const UPDATE_POST = gql`
  mutation UpdatePost($id: String!, $title: String!, $description: String!) {
    updatePost(id: $id, title: $title, description: $description)
  }
`;
