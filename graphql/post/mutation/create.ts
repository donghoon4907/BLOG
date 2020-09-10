import { gql } from "@apollo/client";

/**
 * * 게시물 추가
 *
 * @mutation
 * @author frisk
 * @param $title 제목
 * @param $description 내용
 * @param $categories 카테고리 목록
 */
export const CREATE_POST = gql`
  input CategoryInput {
    id: String
    content: String!
  }

  mutation CreatePost(
    $title: String!
    $description: String
    $categories: [CategoryInput!]!
  ) {
    createPost(
      title: $title
      description: $description
      categories: $categories
    )
  }
`;
