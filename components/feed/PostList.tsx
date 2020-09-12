import React, { useEffect, FC, memo } from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../graphql/post/query";
import TimelinePostItem from "../post/TimelinePostItem";
import Loader from "../common/Loader";

/**
 * 게시물 렌더링 컴포넌트
 *
 * @Component
 * @author frisk
 */
const PostList: FC = () => {
  /**
   * 최근 게시물 로드
   */
  const { data, loading, fetchMore } = useQuery(GET_POSTS, {
    variables: {
      first: 30,
      orderBy: "createdAt_DESC"
    },
    notifyOnNetworkStatusChange: true
  });
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

    if (data.posts) {
      if (scrollTop + clientHeight === scrollHeight) {
        if (data.posts.length > 0 && data.posts.length % 30 === 0) {
          /**
           * 추가 게시물 요청
           */
          fetchMore({
            variables: {
              skip: data.posts.length,
              first: 30,
              orderBy: "createdAt_DESC"
            },
            updateQuery: (prev: any, next: any) => {
              const { fetchMoreResult } = next;

              if (fetchMoreResult) {
                if (fetchMoreResult.posts.length === 0) {
                  window.removeEventListener("scroll", handleScrollFetchMore);
                }

                return Object.assign({}, prev, {
                  posts: [...prev.posts, ...fetchMoreResult.posts]
                });
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
   * 스크롤 이벤트 바인딩
   */
  useEffect(() => {
    window.addEventListener("scroll", handleScrollFetchMore);

    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [data.posts, loading]);

  return (
    <>
      {loading && <Loader />}
      {data.posts.map(post => (
        <TimelinePostItem key={post.id} {...post} />
      ))}
    </>
  );
};

export default memo(PostList);
