import { useRouter } from "next/router";
import React, { useEffect, FC } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import SearchPostPresenter from "./SearchPostPresenter";
import { postsQuery } from "../../graphql/post/query";

const SearchPostContainer: FC = () => {
  const router = useRouter();

  const variables = {
    first: 10
  };

  if (router.query.keyword && router.query.keyword.length > 0) {
    (router.query.keyword as any).forEach(v => {
      const splitQuery = v.split("=");
      variables[splitQuery[0]] = splitQuery[1];
    });
  }

  const { data, loading, fetchMore, networkStatus } = useQuery(postsQuery, {
    variables,
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
              ...variables,
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
    <SearchPostPresenter
      loading={loading}
      loadingMorePosts={loadingMorePosts}
      posts={data.getPosts}
      keyword={variables["searchKeyword"] || ""}
    />
  );
};

export default SearchPostContainer;
