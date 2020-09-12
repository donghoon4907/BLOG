import { gql } from "@apollo/client";

/**
 * * 게시물 추가
 *
 * @mutation
 * @author frisk
 * @param $title 제목
 * @param $description 소개
 * @param $content 내용
 * @param $category 카테고리
 */
export const CREATE_POST = gql`
  mutation CreatePost(
    $title: String!
    $description: String!
    $content: String!
    $category: String!
  ) {
    createPost(
      title: $title
      description: $description
      content: $content
      category: $category
    )
  }
`;
