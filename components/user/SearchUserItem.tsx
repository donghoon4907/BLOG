import React, { FC } from "react";
import styled from "styled-components";
import { Avatar } from "../../interfaces";
import { Thumbnail, Column } from "./common";
import { useVssState } from "../../context";
import FollowButton from "../common/FollowButton";

const Container = styled.div`
  ${props => props.theme.whiteBox};
  width: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 100;

  ${props => props.theme.media.phone} {
    width: 100%;
  }
`;

interface Props {
  /**
   * * User ID
   */
  id: string;
  /**
   * * User nickname
   */
  nickname: string;
  /**
   * * User avatar object
   */
  avatar: Avatar;
  /**
   * * User followers
   */
  followedBy: any;
  /**
   * * User followings
   */
  following: any;
  /**
   * * User-written posts
   */
  posts: any;
}

/**
 * Search user item component
 *
 * @Component
 * @author frisk
 * @deprecated
 */
const SearchUserItem: FC<Props> = ({
  id,
  nickname,
  avatar,
  followedBy,
  following,
  posts
}) => {
  const { userId } = useVssState();
  const isFollowing = followedBy.some((v: any) => v.id === userId);
  return (
    <Container>
      <Thumbnail src={avatar.url} />
      <Column>
        <div>{nickname}</div>
        <div>
          {userId && id !== userId && (
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

export default SearchUserItem;
