import React, { useEffect, FC, memo } from "react";
import { useQuery } from "@apollo/client";
import { postsQuery } from "../../graphql/post/query";
import PostContainer from "../post/PostContainer";
import Loader from "../common/Loader";

const PostList: FC = () => {
  const { data, loading, fetchMore } = useQuery(postsQuery, {
    variables: {
      first: 10
    },
    notifyOnNetworkStatusChange: true
  });

  const handleScrollFetchMore = () => {
    if (loading) return;
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    if (data) {
      if (data.getPosts) {
        if (scrollTop + clientHeight === scrollHeight) {
          if (data.getPosts.length % 10 === 0) {
            fetchMore({
              variables: {
                skip: data.getPosts.length
              },
              updateQuery: (prev: any, next: any) => {
                const { fetchMoreResult } = next;

                if (fetchMoreResult) {
                  if (fetchMoreResult.getPosts.length === 0) {
                    window.removeEventListener("scroll", handleScrollFetchMore);
                  }

                  return Object.assign({}, prev, {
                    getPosts: [...prev.getPosts, ...fetchMoreResult.getPosts]
                  });
                } else {
                  return prev;
                }
              }
            });
          }
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFetchMore);
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [data.getPosts, loading]);

  return (
    <>
      {loading && <Loader />}
      {data.getPosts.map((post) => (
        <PostContainer key={post.id} {...post} />
      ))}
    </>
  );
};

export default memo(PostList);
