import React, { useEffect, FC, memo } from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../graphql/post/query";
import TimelinePostItem from "./TimelinePostItem";
import Loader from "../common/Loader";

/**
 * * 피드 페이지 게시물 렌더링 컴포넌트
 *
 * @Component
 * @author frisk
 */
const FeedPostList: FC = () => {
  /**
   * 최근 게시물 로드
   */
  const {
    data: { posts },
    loading,
    fetchMore
  } = useQuery(GET_POSTS, {
    variables: {
      first: 30,
      orderBy: "createdAt_DESC"
    },
    notifyOnNetworkStatusChange: true
  }) as any;
  /**
   * 스크롤 이벤트 핸들러
   */
  const handleScrollFetchMore = () => {
    /**
     * 요청 중인 경우
     */
    if (loading) {
      return;
    }

    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    if (posts.data) {
      if (scrollTop + clientHeight === scrollHeight) {
        if (posts.data.length > 0 && posts.data.length % 30 === 0) {
          /**
           * 추가 게시물 요청
           */
          fetchMore({
            variables: {
              skip: posts.data.length,
              first: 30,
              orderBy: "createdAt_DESC"
            },
            updateQuery: (prev: any, next: any) => {
              const { fetchMoreResult } = next;

              if (fetchMoreResult) {
                if (fetchMoreResult.posts.data.length === 0) {
                  window.removeEventListener("scroll", handleScrollFetchMore);
                }

                return {
                  posts: {
                    data: [...prev.posts.data, ...fetchMoreResult.posts.data],
                    total: posts.total
                  }
                };
              } else {
                return prev;
              }
            }
          });
        }
      }
    }
  };
  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    /**
     * 스크롤 이벤트 바인딩
     */
    window.addEventListener("scroll", handleScrollFetchMore);
    /**
     * 스크롤 이벤트 언바인딩
     */
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [posts.data, loading]);

  return (
    <>
      {loading && <Loader />}
      {posts.data.map(post => (
        <TimelinePostItem key={post.id} {...post} />
      ))}
    </>
  );
};

export default memo(FeedPostList);
