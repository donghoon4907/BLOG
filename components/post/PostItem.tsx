import { useRouter } from "next/router";
import React, { FC, useCallback } from "react";
import styled from "styled-components";
import moment from "moment";
import Avatar from "../common/Avatar";
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
 * * 게시물 렌더링 컴포넌트
 *
 * @Component
 * @author frisk
 */
const PostItem: FC<PostProps> = ({
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
      <MetaWrapper>
        <TitleWrapper>
          <Category>
            <Button action="category">{category}</Button>
          </Category>

          <Title>{title}</Title>
        </TitleWrapper>

        <Description>{description}</Description>
        <MetaFooter>
          <MetaColumn>
            <Avatar src={user.avatar.url} size="30" userId={user.id} />
            <span>{user.nickname}</span>
            <span>·</span>
            <time>
              {moment(createdAt).format("YYYY년 MM월 DD일 HH시 mm분")}
            </time>
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

export default PostItem;
