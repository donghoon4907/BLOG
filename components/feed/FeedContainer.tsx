import React, { useState, useCallback, useEffect, useRef, FC } from "react";
import { useQuery } from "@apollo/client";
import FeedPresenter from "./FeedPresenter";
import { postsQuery } from "../../graphql/post/query";
import { noticesQuery } from "../../graphql/notice/query";
import { useVssState, useVssDispatch, SET_NOTICE_MODAL } from "../../context";
import Loader from "../common/Loader";

export type NoticeProps = {
  action: string;
  actionText: string;
  title: string;
  description: string;
  noticeId: string;
};

const FeedContainer: FC = () => {
  const { isMaster, isShowNoticeModal } = useVssState();
  const dispatch = useVssDispatch();
  const recommandUserEl = useRef(null);
  const [notice, setNotice] = useState<NoticeProps>({
    action: "wait",
    actionText: "비활성화",
    title: "",
    description: "",
    noticeId: ""
  });

  const { data: posts, loading: loadPostLoading, fetchMore } = useQuery(
    postsQuery,
    {
      variables: {
        first: 10
      },
      notifyOnNetworkStatusChange: true
    }
  );

  const { data: notices, loading: loadNoticeLoading } = useQuery(noticesQuery, {
    variables: {
      first: 10
    },
    fetchPolicy: "network-only"
  });

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
      isShowNoticeModal: true
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
        isShowNoticeModal: true
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
  }, [posts && posts.getPosts, loadPostLoading]);

  if ((loadPostLoading && !posts) || (loadNoticeLoading && !notices)) {
    return <Loader />;
  }

  return (
    <FeedPresenter
      posts={posts}
      notices={notices}
      loading={loadPostLoading}
      isMaster={isMaster}
      notice={notice}
      isShowNoticeModal={isShowNoticeModal}
      onShowNotice={handleShowNotice}
      onAddNotice={handleAddNotice}
      recommandUserEl={recommandUserEl}
    />
  );
};

export default FeedContainer;
