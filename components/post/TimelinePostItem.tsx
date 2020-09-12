import { useRouter } from "next/router";
import React, { FC, useCallback } from "react";
import styled from "styled-components";
import moment from "moment";
import Avatar from "../common/Avatar";
import Timestamp from "../common/Timestamp";
import { HeartFull, Comment, View } from "../icon";
import Button from "../common/Button";
import { PostProps } from "../../interfaces";

const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const TimelineWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

const Timeline = styled.div`
  position: relative;
  border: 1px solid lightgray;
`;

const TimestampWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5px;
  text-align: right;
  left: -150px;
  width: 130px;
`;

const Stamp = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 8px;
  left: -8px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
  z-index: 1;
`;

const ChildStamp = styled.div`
  background: ${props => props.theme.blueColor};
  opacity: 0.7;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Category = styled.div`
  width: auto;
  margin-right: 10px;
`;

const Title = styled.h3`
  ${props => props.theme.media.desktop} {
    font-size: 20px;
  }
`;
const Description = styled.p`
  height: auto;

  ${props => props.theme.media.desktop} {
    font-size: 14px;
  }
`;

const MetaWrapper = styled.div`
  flex: 1;
  padding: 5px;
`;

const MetaFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MetaColumn = styled.div`
  display: flex;
  justfiy-content: flex-start;
  align-items: center;

  & span {
    margin-right: 10px;
    margin-left: 5px;
  }
`;

/**
 * 타임라인 형식 게시물 렌더링 컴포넌트
 *
 * @Component
 * @author frisk
 */
const TimelinePostItem: FC<PostProps> = ({
  id,
  title,
  description,
  user,
  createdAt,
  likeCount,
  viewCount,
  category,
  commentCount
}) => {
  /**
   * 라우터 모듈 활성화
   */
  const router = useRouter();
  /**
   * 클릭 핸들러
   */
  const handleClick = useCallback(() => {
    router.push(`/post/${id}`);
  }, []);

  return (
    <Container onClick={handleClick}>
      <TimelineWrapper>
        <Timeline>
          <Stamp>
            <ChildStamp />
          </Stamp>
          <TimestampWrapper>
            <time>{moment(createdAt).format("YYYY년 MM월 DD일")}</time>
            <Timestamp>{moment(createdAt).format("HH시 mm분")}</Timestamp>
          </TimestampWrapper>
        </Timeline>
      </TimelineWrapper>
      <MetaWrapper>
        <TitleWrapper>
          <Category>
            <Button>{category}</Button>
          </Category>

          <Title>{title}</Title>
        </TitleWrapper>

        <Description>{description}</Description>
        <MetaFooter>
          <MetaColumn>
            <Avatar src={user.avatar.url} size="30" />
            <span>{user.nickname}</span>
          </MetaColumn>
          <MetaColumn>
            <div title="좋아요 수">
              <HeartFull />
              <span>{likeCount}</span>
            </div>
            <div title="댓글 수">
              <Comment />
              <span>{commentCount}</span>
            </div>
            <div title="조회 수">
              <View />
              <span>{viewCount}</span>
            </div>
          </MetaColumn>
        </MetaFooter>
      </MetaWrapper>
    </Container>
  );
};

export default TimelinePostItem;
