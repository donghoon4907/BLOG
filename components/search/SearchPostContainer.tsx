import { useRouter } from "next/router";
import React, { useEffect, FC } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import SearchPostPresenter from "./SearchPostPresenter";
import { postsQuery } from "../../graphql/post/query";

const SearchPostContainer: FC = () => {
  const router = useRouter();

  let keyword, orderBy;
  if (router.query.keyword) {
    keyword = router.query.keyword[0] || "";
    orderBy = router.query.keyword[1] || "";
  }

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
              skip: data.getPosts.length,
              searchKeyword: decodeURIComponent(keyword),
              orderBy
            }
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFetchMore);
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [data.getPosts, loading, keyword, orderBy]);

  return (
    <SearchPostPresenter
      loading={loading}
      loadingMorePosts={loadingMorePosts}
      posts={data.getPosts}
      keyword={keyword}
    />
  );
};

export default SearchPostContainer;
