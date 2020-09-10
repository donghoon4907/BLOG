import React, { useState, useEffect, useCallback, FC } from "react";
import { useApolloClient } from "@apollo/client";
import {
  useVssState,
  useVssDispatch,
  SHOW_FILTER_BAR,
  HIDE_FILTER_BAR
} from "../../context";
import SearchPostPresenter from "./SearchPostPresenter";
import { postsQuery } from "../../graphql/post/query";

/**
 * Component for search post
 *
 * @Container
 * @author frisk
 */
const SearchPostContainer: FC = () => {
  const {
    searchPostOption: { searchKeyword, orderBy },
    isShowFilterBar
  } = useVssState();

  const dispatch = useVssDispatch();
  const client = useApolloClient();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadPost, setLoadPost] = useState<any>([]);

  const searchPost = useCallback(
    async isReset => {
      if (loading) return;
      setLoading(true);
      const { data } = await client.query({
        query: postsQuery,
        variables: {
          searchKeyword,
          orderBy,
          first: 10,
          skip: isReset ? 0 : loadPost.length
        },
        fetchPolicy: "network-only"
      });
      if (data) {
        if (isReset) {
          setLoadPost(data.getPosts);
        } else {
          setLoadPost(loadPost.concat(data.getPosts));
        }
      }
      setLoading(false);
    },
    [loading, loadPost, searchKeyword, orderBy]
  );

  const handleScrollFetchMore = () => {
    if (loading) return;
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    if (loadPost.length > 0) {
      if (scrollTop + clientHeight === scrollHeight) {
        if (loadPost.length % 10 === 0) {
          searchPost(false);
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
  }, [loadPost, loading]);

  useEffect(() => {
    if (searchKeyword) {
      searchPost(true);
    }
  }, [searchKeyword, orderBy]);

  return (
    <SearchPostPresenter
      loading={loading}
      posts={loadPost}
      keyword={searchKeyword}
      isShowFilterBar={isShowFilterBar}
      onClickFilter={handleClickFilter}
    />
  );
};

export default SearchPostContainer;
