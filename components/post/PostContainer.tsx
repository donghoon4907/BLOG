import React, { useState, useCallback, FC } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import PostPresenter from "./PostPresenter";
import { removePostMutation } from "../../graphql/post/mutation/remove";
import { likeMutation } from "../../graphql/post/mutation/like";
import { useVssState, useVssDispatch, SHOW_POST_MODAL } from "../../context";

export type PostProps = {
  id: string;
  title: string;
  description: string;
  video: any;
  user: any;
  likes: any;
  createdAt: string;
  updatedAt: string;
  status: string;
  room: any;
};

const PostContainer: FC<PostProps> = ({
  id,
  title,
  description,
  createdAt,
  user,
  video,
  status,
  likes,
  room
}) => {
  const { id: userId } = useVssState();
  const dispatch = useVssDispatch();

  const isMyPost = userId || userId === user.id;
  const [ctrlIsLiked, setCtrlIsLiked] = useState<boolean>(
    likes.some((v: any) => v.user.id === userId)
  );
  const [ctrlLikeCount, setCtrlLikeCount] = useState<number>(likes.length);

  const [like, { loading: likeLoading }] = useMutation(likeMutation);
  const [remove, { loading: removeLoading }] = useMutation(removePostMutation);

  // 포스트 채팅방 접근 이벤트
  const handleRoom = useCallback(() => {
    Router.push(`/room/${room.id}`);
  }, []);

  // 포스트 수정 이벤트
  const handleUpdate = useCallback(() => {
    dispatch({
      type: SHOW_POST_MODAL,
      isShow: true,
      id,
      title,
      description,
      status,
      url: video.url
    });
  }, []);

  // 좋아요 / 좋아요 취소 이벤트
  const handleLike = useCallback(async () => {
    if (likeLoading) {
      return alert("요청중입니다. 잠시만 기다려주세요.");
    }

    setCtrlIsLiked(!ctrlIsLiked);
    setCtrlLikeCount(ctrlIsLiked ? ctrlLikeCount - 1 : ctrlLikeCount + 1);

    try {
      await like({
        variables: { postId: id }
      });
    } catch (error) {
      const { message } = JSON.parse(error.message);
      alert(message);
    }
  }, [ctrlIsLiked, ctrlLikeCount, likeLoading]);

  // 삭제 이벤트
  const handleDelete = useCallback(async () => {
    if (removeLoading) {
      return alert("요청중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("포스트를 삭제하시겠어요?");

    if (tf) {
      try {
        const {
          data: { deletePost }
        } = await remove({
          variables: { postId: id }
        });

        if (deletePost) {
          alert("포스트가 삭제되었습니다.");
          window.location.reload();
        }
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    }
  }, [removeLoading]);

  return (
    <PostPresenter
      title={title}
      description={description}
      status={status}
      createdAt={createdAt}
      user={user}
      video={video}
      isLiked={ctrlIsLiked}
      likeCount={ctrlLikeCount}
      isMyPost={isMyPost}
      onLike={handleLike}
      onUpdate={handleUpdate}
      onRoom={handleRoom}
      onDelete={handleDelete}
    />
  );
};

export default PostContainer;
