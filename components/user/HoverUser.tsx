import React, { FC } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { userQuery } from "../../graphql/user/query";
import { useVssState } from "../../context";
import FollowButton from "../common/FollowButton";
import { Thumbnail, Column } from "./common";

const Container = styled.div`
  ${props => props.theme.whiteBox};
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  top: 35px;
  left: 0;
  width: 240px;
  height: 220px;
  z-index: 100;
`;

const Loading = styled.div`
  ${props => props.theme.whiteBox};
  position: absolute;
  overflow: hidden;
  display: flex;
  justfiy-content: flex-start;
  align-items: center;
  text-indent: 10px;
  top: 35px;
  left: 0;
  width: 240px;
  height: 50px;
  z-index: 100;
`;

interface Props {
  userId: string;
}

const HoverUser: FC<Props> = ({ userId }) => {
  const { userId: myUserId } = useVssState();
  const { data, loading } = useQuery(userQuery, {
    variables: {
      userId
    },
    fetchPolicy: "network-only"
  });

  if (loading) {
    return <Loading>로딩 중입니다...</Loading>;
  }
  const { nickname, avatar, followedBy, following, posts } = data.getUser;
  const isFollowing = followedBy.some((v: any) => v.id === myUserId);
  return (
    <Container>
      <Thumbnail src={avatar.url} />
      <Column>
        <div>{nickname}</div>
        <div>
          {myUserId && userId !== myUserId && (
            <FollowButton userId={userId} isFollowing={isFollowing} />
          )}
        </div>
      </Column>
      <Column>
        <span className="info">포스트: {posts.length}</span>
        <span className="info">팔로워: {followedBy.length}</span>
        <span className="info">팔로잉: {following.length}</span>
      </Column>
    </Container>
  );
};

export default HoverUser;
