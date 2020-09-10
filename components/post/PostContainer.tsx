import React, { useState, useCallback, useEffect, FC } from "react";
import { useMutation } from "@apollo/client";
import PostPresenter from "./PostPresenter";
import { DELETE_POST } from "../../graphql/post/mutation/delete";
import { LIKE_POST } from "../../graphql/post/mutation/like";
import { useLocalState, useLocalDispatch } from "../../context";
import { SHOW_LOGIN_MODAL } from "../../context/action";
import { getAccessToken } from "../../lib/token";

export type PostProps = {
  /**
   * 게시글 ID
   */
  id: string;
  /**
   * 제목
   */
  title: string;
  /**
   * 내용
   */
  description: string;
  /**
   * 등록자
   */
  user: any;
  /**
   * Likes
   */
  likes: any;
  /**
   * 좋아요 수
   */
  likeCount: number;
  /**
   * 조회수
   */
  viewCount: number;
  /**
   * 등록일
   */
  createdAt: string;
  /**
   * 수정일
   */
  updatedAt: string;
  /**
   * 카테고리 목록
   */
  categories: any;
  /**
   * 댓글수
   */
  commentCount: number;
};

/**
 * Component for render post
 *
 * @Container
 * @author frisk
 */
const PostContainer: FC<PostProps> = ({
  id,
  title,
  description,
  user,
  createdAt,
  likes,
  likeCount,
  viewCount,
  categories,
  commentCount
}) => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 감지 모듈 활성화
   */
  const { id: userId } = useLocalState();
  /**
   * 내가 작성한 게시물인지 여부
   */
  const isMyPost: boolean = (userId && userId === user.id) || false;
  /**
   * 좋아요 여부 상태 관리 모듈 활성화
   */
  const [isLike, setIsLike] = useState<boolean>(
    likes.some(v => v.user.id === userId)
  );
  /**
   * 좋아요 수 상태 관리 모듈 활성화
   */
  const [_likeCount, setLikeCount] = useState<number>(likes.length);
  /**
   * 좋아요 mutation 활성화
   */
  const [like, { loading: likeLoading }] = useMutation(LIKE_POST);
  /**
   * 게시물 삭제 mutation 활성화
   */
  const [remove, { loading: removeLoading }] = useMutation(DELETE_POST);
  /**
   * 좋아요 핸들러
   */
  const handleLike = useCallback(async () => {
    const token: string = getAccessToken() as string;

    if (token) {
      setIsLike(!isLike);
      setLikeCount(isLike ? _likeCount - 1 : _likeCount + 1);

      try {
        await like({
          variables: { postId: id }
        });
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    } else {
      /**
       * 로그인 팝업 보이기
       */
      dispatch({
        type: SHOW_LOGIN_MODAL
      });
    }
  }, [isLike, _likeCount, likeLoading]);

  /**
   * 게시물 삭제 핸들러
   */
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
          location.reload();
        }
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    }
  }, [removeLoading]);

  useEffect(() => {
    setIsLike(likes.some(v => v.user.id === userId));
  }, [userId]);

  return (
    <PostPresenter
      title={title}
      description={description}
      createdAt={createdAt}
      user={user}
      isLike={isLike}
      likeCount={_likeCount}
      isMyPost={isMyPost}
      onLike={handleLike}
    />
  );
};

export default PostContainer;
