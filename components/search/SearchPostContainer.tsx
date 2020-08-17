import Router from "next/router";
import React, { useCallback, useEffect, FC } from "react";
import { useQuery } from "@apollo/client";
import SearchPostPresenter from "./SearchPostPresenter";
import { postsQuery } from "../../graphql/post/query";
import Loader from "../common/Loader";

const SearchPostContainer: FC = () => {
  const keyword = (Router.query.keyword || "") as string;
  const orderBy = (Router.query.orderBy || "createdAt_DESC") as string;

  const { data: posts, loading: loadPostLoading, fetchMore } = useQuery(
    postsQuery,
    {
      variables: {
        searchKeyword: decodeURIComponent(keyword),
        orderBy,
        first: 10
      },
      notifyOnNetworkStatusChange: true
    }
  );

  const handleSort = useCallback(nextOrderBy => {
    Router.push(`/search?keyword=${keyword}&orderBy=${nextOrderBy}`);
  }, []);

  const handleScrollFetchMore = () => {
    if (loadPostLoading) return;
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    if (posts && posts.getPosts) {
      if (scrollTop + clientHeight === scrollHeight) {
        if (posts.getPosts.length % 10 === 0) {
          fetchMore({
            variables: {
              skip: posts.getPosts.length
            },
            updateQuery: (
              prev,
              { fetchMoreResult }: { fetchMoreResult?: any }
            ) => {
              if (!fetchMoreResult) return prev;

              if (fetchMoreResult.getPosts.length === 0) {
                window.removeEventListener("scroll", handleScrollFetchMore);
              }

              return Object.assign({}, prev, {
                getPosts: [...prev.getPosts, ...fetchMoreResult.getPosts]
              });
            }
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFetchMore);
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [posts && posts.getPosts, loadPostLoading]);

  if (loadPostLoading && !posts) {
    return <Loader />;
  }

  return (
    <SearchPostPresenter posts={posts} orderBy={orderBy} onSort={handleSort} />
  );
};

export default SearchPostContainer;
