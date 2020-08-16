import React, { FC } from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import PostContainer from "../post/PostContainer";
import CarouselContainer from "../common/Carousel";
import SetNoticeModal from "../modal/SetNoticeContainer";
import Section from "../common/Section";
import Timestamp from "../common/Timestamp";
import Loader from "../common/Loader";
import MoreLoader from "../common/MoreLoader";
import { Add } from "../icon";
import { NoticeProps } from "./FeedContainer";

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

const Subject = styled.div<{ activeBorder?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => props.activeBorder && "2px solid black"};
  padding: 8px 5px;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const NoData = styled.div`
  width: 100%;
  text-align: center;
`;

const NoticeWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  padding: 5px;
  text-align: center;
  cursor: pointer;
`;

type Props = {
  posts: any;
  notices: any;
  loading: boolean;
  isMaster: boolean;
  notice: NoticeProps;
  isShowNoticeModal: boolean;
  onShowNotice: any;
  onAddNotice: any;
  recommandUserEl: any;
};

const FeedPresenter: FC<Props> = ({
  posts: { getPosts },
  notices: { getNotices },
  loading,
  isMaster,
  notice,
  isShowNoticeModal,
  onShowNotice,
  onAddNotice,
  recommandUserEl
}) => (
  <Section flexDirection="row">
    <PostWrap>
      <Subject>최근 업로드</Subject>
      {getPosts.length > 0 ? (
        getPosts.map(post => <PostContainer key={post.id} {...post} />)
      ) : (
        <NoData>
          <h1>게시글이 없습니다.</h1>
        </NoData>
      )}
      {loading && <MoreLoader />}
    </PostWrap>
    <UserWrap ref={recommandUserEl}>
      <aside>
        <StickyWrap>
          <div>
            <Subject activeBorder>
              <span>공지사항</span>
              <div>
                {isMaster && (
                  <div onClick={onAddNotice}>
                    <Add />
                  </div>
                )}
              </div>
            </Subject>
            {getNotices.length > 0 ? (
              <CarouselContainer>
                {getNotices.map(({ id, title, description, updatedAt }) => (
                  <Carousel.Item key={id}>
                    <NoticeWrapper
                      onClick={() => onShowNotice(title, description, id)}
                    >
                      <div>{title}</div>
                      <Timestamp text={updatedAt} />
                    </NoticeWrapper>
                  </Carousel.Item>
                ))}
              </CarouselContainer>
            ) : (
              <NoData>
                <h1>공지사항이 없습니다.</h1>
              </NoData>
            )}
          </div>
        </StickyWrap>
      </aside>
    </UserWrap>
    {isShowNoticeModal && <SetNoticeModal {...notice} isMaster={isMaster} />}
  </Section>
);

export default FeedPresenter;
