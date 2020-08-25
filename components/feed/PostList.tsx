import React, { useEffect, FC, memo } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import { postsQuery } from "../../graphql/post/query";
import PostContainer from "../post/PostContainer";
import Loader from "../common/Loader";

const PostList: FC = () => {
  const { data, loading, fetchMore, networkStatus } = useQuery(postsQuery, {
    variables: {
      first: 10
    },
    notifyOnNetworkStatusChange: true
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  const handleScrollFetchMore = () => {
    if (loading) return;
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    if (data.getPosts) {
      if (scrollTop + clientHeight === scrollHeight) {
        if (data.getPosts.length % 10 === 0) {
          fetchMore({
            variables: {
              skip: data.getPosts.length
            }
          });
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
      {loading && loadingMorePosts && <Loader />}
      {data.getPosts.map((post) => (
        <PostContainer key={post.id} {...post} />
      ))}
    </>
  );
};

export default memo(PostList);
