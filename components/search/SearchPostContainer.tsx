import React, { useEffect, useCallback, FC } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import {
  useVssState,
  useVssDispatch,
  SHOW_FILTER_BAR,
  HIDE_FILTER_BAR
} from "../../context";
import SearchPostPresenter from "./SearchPostPresenter";
import { postsQuery } from "../../graphql/post/query";

const SearchPostContainer: FC = () => {
  const {
    searchPostOption: { searchKeyword, orderBy },
    isShowFilterBar
  } = useVssState();

  const dispatch = useVssDispatch();
  const { data, loading, fetchMore, networkStatus } = useQuery(postsQuery, {
    variables: {
      first: 10,
      searchKeyword
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
              searchKeyword,
              orderBy
            }
          });
        }
      }
    }
  };

  const handleClickFilter = useCallback(() => {
    dispatch({
      type: isShowFilterBar ? HIDE_FILTER_BAR : SHOW_FILTER_BAR
    });
  }, [isShowFilterBar]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFetchMore);
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [data.getPosts, loading]);

  return (
    <SearchPostPresenter
      loading={loading}
      loadingMorePosts={loadingMorePosts}
      posts={data.getPosts}
      keyword={searchKeyword}
      isShowFilterBar={isShowFilterBar}
      onClickFilter={handleClickFilter}
    />
  );
};

export default SearchPostContainer;
