import React, { useState, useCallback, useEffect, useRef, FC } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import FeedPresenter from "./FeedPresenter";
import { postsQuery } from "../../graphql/post/query";
import { noticesQuery } from "../../graphql/notice/query";
import { useVssState, useVssDispatch, SET_NOTICE_MODAL } from "../../context";

export type NoticeProps = {
  action: string;
  actionText: string;
  title: string;
  description: string;
  noticeId: string;
};

const FeedContainer: FC = () => {
  const { isMaster, isShowNoticeModal, isShowAddPostModal } = useVssState();
  const dispatch = useVssDispatch();
  const recommandUserEl = useRef(null);
  const [notice, setNotice] = useState<NoticeProps>({
    action: "wait",
    actionText: "비활성화",
    title: "",
    description: "",
    noticeId: ""
  });

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
    if (posts && posts.getPosts) {
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
    setNotice({
      action: "add",
      actionText: "등록",
      title: "",
      description: "",
      noticeId: ""
    });
    dispatch({
      type: SET_NOTICE_MODAL,
      payload: true
    });
  }, []);

  const handleShowNotice = useCallback(
    (title, description, noticeId) => {
      setNotice({
        action: isMaster ? "modifiable" : "readonly",
        actionText: "",
        title,
        description,
        noticeId
      });
      dispatch({
        type: SET_NOTICE_MODAL,
        payload: true
      });
    },
    [isMaster]
  );

  useEffect(() => {
    if (!isShowNoticeModal) {
      setNotice({
        action: "wait",
        actionText: "비활성화",
        title: "",
        description: "",
        noticeId: ""
      });
    }
  }, [isShowNoticeModal]);

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
      notice={notice}
      isShowNoticeModal={isShowNoticeModal}
      isShowAddPostModal={isShowAddPostModal}
      onShowNotice={handleShowNotice}
      onAddNotice={handleAddNotice}
      recommandUserEl={recommandUserEl}
    />
  );
};

export default FeedContainer;
