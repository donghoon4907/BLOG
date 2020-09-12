import { useRouter } from "next/router";
import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { Add } from "../icon";
import { useLocalDispatch } from "../../context";
import { SHOW_LOGIN_MODAL } from "../../context/action";
import { getAccessToken } from "../../lib/token";

const Container = styled.div`
  ${props => props.theme.media.tablet} {
    display: none;
  }
`;

/**
 * 헤더 게시물 추가 컴포넌트
 *
 * @Component
 * @author frisk
 */
const AddPostButton: FC = () => {
  /**
   * 라우터 모듈 활성화
   */
  const router = useRouter();
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 클릭 핸들러
   */
  const handleClick = useCallback(() => {
    /**
     * 토큰 로드
     */
    const token: string = getAccessToken() as string;

    if (token) {
      /**
       * 게시물 작성 페이지로 이동
       */
      router.push("/create");
    } else {
      /**
       * 로그인 팝업 보이기
       */
      dispatch({
        type: SHOW_LOGIN_MODAL
      });
    }
  }, []);

  return (
    <Container onClick={handleClick} title="포스트 등록">
      <Add />
    </Container>
  );
};

export default AddPostButton;
