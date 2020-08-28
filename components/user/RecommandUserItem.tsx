import React, { FC, useState, useCallback } from "react";
import styled from "styled-components";
import { useVssState } from "../../context";
import HoverUser from "../user/HoverUser";
import FollowButton from "../common/FollowButton";
import Avatar from "../common/Avatar";
import { Avatar as AvatarProps } from "../../interfaces";

const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 10px 0;
`;

const AvatarWrapper = styled.div`
  width: 50px;
`;

const NicknameWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
`;

const FollowWrapper = styled.div`
  width: 80px;
`;

interface Props {
  id: string;
  nickname: string;
  avatar: AvatarProps;
  followedBy: any;
  following: any;
  posts: any;
}

const RecommandUserItem: FC<Props> = ({ id, avatar, nickname, followedBy }) => {
  const { userId } = useVssState();
  const isFollowing = followedBy.some((v) => v.id === userId);

  const [isShowUser, setIsShowUser] = useState<boolean>(false);

  const handleClickAvatar = useCallback(() => {
    setIsShowUser(!isShowUser);
  }, [isShowUser]);

  return (
    <Container key={id}>
      <AvatarWrapper>
        <Avatar size="45" src={avatar.url} onClick={handleClickAvatar} />
      </AvatarWrapper>

      <NicknameWrapper>{nickname}</NicknameWrapper>

      <FollowWrapper>
        {userId && id !== userId && (
          <FollowButton isFollowing={isFollowing} userId={id} />
        )}
      </FollowWrapper>

      {isShowUser && <HoverUser userId={id} top={60} />}
    </Container>
  );
};

export default RecommandUserItem;
