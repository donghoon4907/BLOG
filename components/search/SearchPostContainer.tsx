import { useRouter } from "next/router";
import React, { useCallback, useEffect, FC } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import SearchPostPresenter from "./SearchPostPresenter";
import { postsQuery } from "../../graphql/post/query";

const SearchPostContainer: FC = () => {
  const router = useRouter();

  const { keyword, orderBy } = router.query as any;

  const { data, loading, fetchMore, networkStatus } = useQuery(postsQuery, {
    variables: {
      searchKeyword: decodeURIComponent(keyword),
      orderBy,
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

  const handleSort = useCallback(nextOrderBy => {
    router.push(`/search?keyword=${keyword}&orderBy=${nextOrderBy}`);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFetchMore);
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [data.getPosts, loading]);

  return (
    <SearchPostPresenter
      loading={loading}
      loadingMorePosts={loadingMorePosts}
      posts={data.getPosts}
      orderBy={orderBy}
      onSort={handleSort}
    />
  );
};

export default SearchPostContainer;
