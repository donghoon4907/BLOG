import React, { FC } from "react";
import styled from "styled-components";
import PostContainer from "../post/PostContainer";
import SetNoticeModal from "../modal/SetNoticeContainer";
import SetPostModal from "../modal/SetPostContainer";
import AuthModal from "../modal/Auth";
import Section from "../common/Section";
import { Add } from "../icon";
import Loader from "../common/Loader";
import { Notice } from "../../interfaces";
import NoticeList from "./NoticeList";
import Subject from "../common/Subject";
import NoData from "../common/NoData";

const PostWrap = styled.div`
  width: 600px;

  ${props => props.theme.media.tablet} {
    width: 100%;
  }
`;

const UserWrap = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justfiy-content: space-between;
  margin-left: 20px;

  & > aside {
    flex: 1;
  }

  ${props => props.theme.media.tablet} {
    display: none;
  }
`;

const StickyWrap = styled.div`
  position: sticky;
  top: 80px;
`;

type Props = {
  loading: boolean;
  loadingMorePosts: boolean;
  posts: any;
  notices: Notice[];
  isMaster: boolean;
  isShowNoticeModal: boolean;
  isShowAddPostModal: boolean;
  isShowLoginModal: boolean;
  onAddNotice: any;
  recommandUserEl: any;
};

const FeedPresenter: FC<Props> = ({
  loading,
  loadingMorePosts,
  posts,
  notices,
  isMaster,
  isShowNoticeModal,
  isShowAddPostModal,
  isShowLoginModal,
  onAddNotice,
  recommandUserEl
}) => (
  <Section flexDirection="row">
    {loading && loadingMorePosts && <Loader />}
    <PostWrap>
      <Subject>신규 포스트</Subject>
      {posts.length > 0 ? (
        posts.map(post => <PostContainer key={post.id} {...post} />)
      ) : (
        <NoData>
          <h1>게시글이 없습니다.</h1>
        </NoData>
      )}
    </PostWrap>
    <UserWrap ref={recommandUserEl}>
      <aside>
        <StickyWrap>
          <div>
            <Subject activeBorder={true}>
              <span>공지사항</span>
              <div>
                {isMaster && (
                  <div onClick={onAddNotice}>
                    <Add />
                  </div>
                )}
              </div>
            </Subject>
            {notices.length > 0 ? (
              <NoticeList notices={notices} />
            ) : (
              <NoData>
                <h1>공지사항이 없습니다.</h1>
              </NoData>
            )}
          </div>
        </StickyWrap>
      </aside>
    </UserWrap>
    {isShowNoticeModal && <SetNoticeModal />}
    {isShowAddPostModal && <SetPostModal />}
    {isShowLoginModal && <AuthModal />}
  </Section>
);

export default FeedPresenter;
