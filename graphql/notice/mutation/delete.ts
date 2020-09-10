import { gql } from "@apollo/client";

/**
 * * 공지사항 삭제
 *
 * @mutation
 * @author frisk
 * @param $id 공지사항 ID
 */
export const DELETE_NOTICE = gql`
  mutation DeleteNotice($id: String!) {
    deleteNotice(id: $id)
  }
`;
