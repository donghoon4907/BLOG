import React, { FC, useState, useCallback } from "react";
import { useMutation } from "@apollo/client";
import Button from "./Button";
import {
  followMutation,
  unfollowMutation
} from "../../graphql/user/mutation/follow";

type Props = {
  isFollowing: boolean;
  userId: string;
};

const FollowButton: FC<Props> = ({ isFollowing, userId }) => {
  const [ctrlIsFolling, setCtrlIsFolling] = useState<boolean>(isFollowing);

  const [follow, { loading: followLoading }] = useMutation(followMutation);
  const [unfollow, { loading: unfollowLoading }] = useMutation(
    unfollowMutation
  );

  const handleFollow = useCallback(async () => {
    if (ctrlIsFolling) {
      if (unfollowLoading) return;

      const { data } = await unfollow({
        variables: { userId }
      });
      if (data.unfollow) {
        setCtrlIsFolling(false);
        alert("언팔로우 되었습니다.");
      }
    } else {
      if (followLoading) return;

      const { data } = await follow({
        variables: { userId }
      });
      if (data.follow) {
        setCtrlIsFolling(true);
        alert("팔로우 되었습니다.");
      }
    }
  }, [ctrlIsFolling, followLoading, unfollowLoading]);

  return (
    <Button
      text={ctrlIsFolling ? "언팔로우" : "팔로우"}
      onClick={handleFollow}
    />
  );
};

export default FollowButton;
