import { gql } from "@apollo/client";

/**
 * * 공지사항 검색
 *
 * @query
 * @author frisk
 * @param $first 요청 목록의 수
 */
export const GET_NOTICES = gql`
  query GetNotices($skip: Int, $first: Int, $orderBy: String) {
    getNotices(skip: $skip, first: $first, orderBy: $orderBy) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
