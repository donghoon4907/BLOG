import React, { FC } from "react";
import styled from "styled-components";
import Section from "../common/Section";
import { Add } from "../icon";
import Subject from "../common/Subject";
import NoticeList from "./NoticeList";
import PostList from "./PostList";
import RecommandUserList from "../common/RecommandUserList";

const PostWrapper = styled.div`
  width: 600px;

  ${props => props.theme.media.tablet} {
    width: 100%;
  }
`;

const UserWrapper = styled.div`
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
  /**
   * * Whether user is master
   */
  isMaster: boolean;
  /**
   * * Handler for show add notice modal
   */
  onAddNotice: any;
};

/**
 * Component for feed
 *
 * @Presenter
 * @author frisk
 */
const FeedPresenter: FC<Props> = ({ isMaster, onAddNotice }) => (
  <Section>
    <PostWrapper>
      <Subject>최신 게시물</Subject>
      <PostList />
    </PostWrapper>
    <UserWrapper>
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
            <NoticeList />
          </div>
          <div>
            <Subject activeBorder={true}>추천인</Subject>
            <RecommandUserList />
          </div>
        </StickyWrap>
      </aside>
    </UserWrapper>
  </Section>
);

export default FeedPresenter;
