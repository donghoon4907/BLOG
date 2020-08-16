import React, { useState, useCallback, FC } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import PostPresenter from "./PostPresenter";
import { removePostMutation } from "../../graphql/post/mutation/remove";
import { likeMutation } from "../../graphql/post/mutation/like";

export type Props = {
  id: string;
  title: string;
  description: string;
  video: any;
  user: any;
  likes: any;
  createdAt: string;
  updatedAt: string;
  status: any;
  isLiked: boolean;
  likeCount: number;
  isMyPost: boolean;
  room: any;
};

const PostContainer: FC<Props> = ({
  id,
  title,
  description,
  createdAt,
  user,
  video,
  isLiked,
  likeCount,
  isMyPost,
  status,
  room
}) => {
  const [ctrlIsLiked, setCtrlIsLiked] = useState(isLiked);
  const [ctrlLikeCount, setCtrlLikeCount] = useState(likeCount);

  const [like, { loading: likeLoading }] = useMutation(likeMutation);
  const [remove, { loading: removeLoading }] = useMutation(removePostMutation);

  // 포스트 채팅방 접근 이벤트
  const handleRoom = useCallback(() => {
    Router.push(`/room/${room.id}`);
  }, []);

  // 좋아요 / 좋아요 취소 이벤트
  const handleLike = useCallback(async () => {
    if (likeLoading) return;

    const {
      data: { likePost }
    } = await like({
      variables: { postId: id }
    });

    if (likePost) {
      if (ctrlIsLiked) {
        setCtrlIsLiked(false);
        setCtrlLikeCount(ctrlLikeCount - 1);
      } else {
        setCtrlIsLiked(true);
        setCtrlLikeCount(ctrlLikeCount + 1);
      }
    }
  }, [ctrlIsLiked, ctrlLikeCount, likeLoading]);

  // 삭제 이벤트
  const handleDelete = useCallback(async () => {
    if (removeLoading) return;
    if (confirm("해당 포스트를 삭제하시겠습니까?")) {
      const {
        data: { deletePost }
      } = await remove({
        variables: { postId: id }
      });

      if (deletePost) {
        alert("해당 포스트가 삭제되었습니다.");
        window.location.reload();
      } else {
        alert("포스트 삭제 중 오류가 발생했습니다.");
      }
    }
  }, [removeLoading]);

  return (
    <PostPresenter
      id={id}
      title={title}
      description={description}
      status={status}
      createdAt={createdAt}
      user={user}
      video={video}
      isLiked={ctrlIsLiked}
      likeCount={ctrlLikeCount}
      isMyPost={isMyPost}
      onClickLike={handleLike}
      onClickRoom={handleRoom}
      onClickDelete={handleDelete}
    />
  );
};

export default PostContainer;
