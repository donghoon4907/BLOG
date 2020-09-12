import { gql } from "@apollo/client";

/**
 * * 공지사항 수정
 *
 * @mutation
 * @author frisk
 * @param $id 공지사항 ID
 * @param $title 제목
 * @param $description 소개
 * @param $content 내용
 * @param $category 카테고리
 */
export const UPDATE_POST = gql`
  mutation UpdatePost(
    $id: String!
    $title: String!
    $description: String!
    $content: String!
    $category: String!
  ) {
    updatePost(
      id: $id
      title: $title
      description: $description
      content: $content
      category: $category
    )
  }
`;
