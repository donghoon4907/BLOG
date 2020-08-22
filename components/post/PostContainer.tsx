import React, { useState, useCallback, useEffect, FC } from "react";
import { useMutation } from "@apollo/client";
import PostPresenter from "./PostPresenter";
import { removePostMutation } from "../../graphql/post/mutation/remove";
import { likeMutation } from "../../graphql/post/mutation/like";
import {
  useVssState,
  useVssDispatch,
  SHOW_POST_MODAL,
  SHOW_LOGIN_MODAL
} from "../../context";
import { getAccessToken } from "../../lib/token";

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
  likes
  // room
}) => {
  const { userId } = useVssState();
  const dispatch = useVssDispatch();

  const isMyPost = userId || userId === user.id;
  const [ctrlIsLiked, setCtrlIsLiked] = useState<boolean>(
    likes.some((v: any) => v.user.id === userId)
  );
  const [ctrlLikeCount, setCtrlLikeCount] = useState<number>(likes.length);
  const [isShowUser, setIsShowUser] = useState<boolean>(false);

  const [like, { loading: likeLoading }] = useMutation(likeMutation);
  const [remove, { loading: removeLoading }] = useMutation(removePostMutation);

  const handleClickAvatar = useCallback(() => {
    setIsShowUser(!isShowUser);
  }, [isShowUser]);

  // 포스트 채팅방 접근 이벤트
  const handleRoom = useCallback(() => {
    const token = getAccessToken();
    if (token) {
      //Router.push(`/room/${room.id}`);
    } else {
      dispatch({
        type: SHOW_LOGIN_MODAL
      });
    }
  }, []);

  // 포스트 수정 이벤트
  const handleUpdate = useCallback(() => {
    dispatch({
      type: SHOW_POST_MODAL,
      postId: id,
      title,
      description,
      status,
      url: video.url
    });
  }, []);

  // 좋아요 / 좋아요 취소 이벤트
  const handleLike = useCallback(async () => {
    const token = getAccessToken();
    if (token) {
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
    } else {
      dispatch({
        type: SHOW_LOGIN_MODAL
      });
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

  useEffect(() => {
    setCtrlIsLiked(likes.some((v: any) => v.user.id === userId));
  }, [userId]);

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
      isShowUser={isShowUser}
      onClickAvatar={handleClickAvatar}
      onLike={handleLike}
      onUpdate={handleUpdate}
      onRoom={handleRoom}
      onDelete={handleDelete}
    />
  );
};

export default PostContainer;
