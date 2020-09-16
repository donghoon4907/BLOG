import { useRouter } from "next/router";
import React, { FC, memo, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useQuery, useMutation } from "@apollo/client";
import { GET_COMMENTS } from "../../graphql/comment/query";
import { CREATE_COMMENT } from "../../graphql/comment/mutation/create";
import { useInput } from "../../hooks";
import { FormTextArea } from "../common/Form";
import Button from "../common/Button";
import { getAccessToken } from "../../lib/token";
import { useLocalDispatch } from "../../context";
import { SHOW_LOGIN_MODAL } from "../../context/action";
import CommentItem from "./CommentItem";
import Loader from "../common/Loader";

const CommentContainer = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

/**
 * 댓글 컴포넌트
 *
 * @Component
 * @author frisk
 */
const CommentList: FC = () => {
  /**
   * 라우터 모듈 활성화
   */
  const router = useRouter();
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 댓글 입력을 위한 useInput 활성화
   */
  const comment = useInput("");
  /**
   * 추천 카테고리 로드
   */
  const {
    data: { comments },
    loading,
    fetchMore,
    refetch
  } = useQuery(GET_COMMENTS, {
    variables: {
      first: 30,
      postId: router.query.id
    },
    notifyOnNetworkStatusChange: true
  }) as any;
  /**
   * 댓글 추가 mutation 활성화
   */
  const [create, { loading: createLoading }] = useMutation(CREATE_COMMENT);

  /**
   * 댓글 추가 핸들러
   */
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      /**
       * 요청 중인 경우
       */
      if (createLoading) {
        return alert("요청 중입니다. 잠시만 기다려주세요.");
      }
      /**
       * 토큰
       */
      const token = getAccessToken();

      if (token) {
        if (comment.value.length > 100) {
          return alert("댓글은 100자 미만으로 입력 해주세요.");
        }

        try {
          await create({
            variables: { postId: router.query.id, content: comment.value }
          });

          refetch();
          /**
           * 댓글 초기화
           */
          comment.setValue("");
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
    },
    [comment.value, createLoading]
  );
  /**
   * 스크롤 이벤트 핸들러
   */
  const handleScrollFetchMore = () => {
    /**
     * 요청 중인 경우
     */
    if (loading) {
      return;
    }

    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    if (comments.data) {
      if (scrollTop + clientHeight === scrollHeight) {
        if (comments.data.length > 0 && comments.data.length % 30 === 0) {
          /**
           * 추가 게시물 요청
           */
          fetchMore({
            variables: {
              skip: comments.data.length,
              first: 30,
              postId: router.query.id
            },
            updateQuery: (prev: any, next: any) => {
              const { fetchMoreResult } = next;
              if (fetchMoreResult) {
                if (fetchMoreResult.comments.data.length === 0) {
                  window.removeEventListener("scroll", handleScrollFetchMore);
                }
                return {
                  comments: {
                    data: [
                      ...prev.comments.data,
                      ...fetchMoreResult.comments.data
                    ],
                    total: comments.total
                  }
                };
              } else {
                return prev;
              }
            }
          });
        }
      }
    }
  };
  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    /**
     * 스크롤 이벤트 바인딩
     */
    window.addEventListener("scroll", handleScrollFetchMore);
    /**
     * 스크롤 이벤트 언바인딩
     */
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [comments.data, loading]);

  return (
    <CommentContainer onSubmit={handleSubmit}>
      {(loading || createLoading) && <Loader />}
      <h4>{comments.total} 개의 댓글</h4>
      <FormTextArea
        placeholder="댓글을 입력하세요."
        name="comment"
        autoComplete="off"
        height={100}
        {...comment}
        required
        label="댓글"
      />
      <Button type="submit">댓글 작성</Button>
      {comments.data.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </CommentContainer>
  );
};

export default memo(CommentList);
