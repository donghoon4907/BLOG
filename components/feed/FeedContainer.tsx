import React, { useCallback, useEffect, useRef, FC } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import FeedPresenter from "./FeedPresenter";
import { postsQuery } from "../../graphql/post/query";
import { noticesQuery } from "../../graphql/notice/query";
import { useVssState, useVssDispatch, SHOW_NOTICE_MODAL } from "../../context";

const FeedContainer: FC = () => {
  const {
    isMaster,
    isShowNoticeModal,
    isShowAddPostModal,
    isShowLoginModal
  } = useVssState();
  const dispatch = useVssDispatch();

  const recommandUserEl = useRef(null);

  const { data: posts, loading, fetchMore, networkStatus } = useQuery(
    postsQuery,
    {
      variables: {
        first: 10
      },
      notifyOnNetworkStatusChange: true
    }
  );

  const { data: notices } = useQuery(noticesQuery, {
    variables: {
      first: 10
    },
    notifyOnNetworkStatusChange: true
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  const handleScrollFetchMore = () => {
    if (loading) return;
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    if (posts.getPosts) {
      if (scrollTop + clientHeight === scrollHeight) {
        if (posts.getPosts.length % 10 === 0) {
          fetchMore({
            variables: {
              skip: posts.getPosts.length
            }
          });
        }
      }
    }
  };

  const handleAddNotice = useCallback(() => {
    dispatch({
      type: SHOW_NOTICE_MODAL,
      action: "add",
      actionText: "등록",
      title: "",
      description: "",
      noticeId: ""
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFetchMore);
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [posts && posts.getPosts, loading]);

  return (
    <FeedPresenter
      loading={loading}
      loadingMorePosts={loadingMorePosts}
      posts={posts.getPosts}
      notices={notices.getNotices}
      isMaster={isMaster}
      isShowNoticeModal={isShowNoticeModal}
      isShowAddPostModal={isShowAddPostModal}
      isShowLoginModal={isShowLoginModal}
      onAddNotice={handleAddNotice}
      recommandUserEl={recommandUserEl}
    />
  );
};

export default FeedContainer;
