import { gql } from "@apollo/client";

/**
 * * Feed 페이지에 필요한 정보 로드
 *
 * @query
 * @author frisk
 * @param $first 요청 목록의 수
 * @alias recentPosts - 최근 포스트 목록
 * @alias recommandUsers - 추천 사용자
 */
export const GET_FEED = gql`
  query GetFeed($first: Int) {
    recentPosts: posts(first: $first) {
      id
      title
      description
      user {
        id
        nickname
        avatar {
          url
        }
      }
      likeCount
      likes {
        id
        user {
          id
        }
      }
      createdAt
      updatedAt
      viewCount
      categories {
        content
      }
      commentCount
    }
    notices(first: $first) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
