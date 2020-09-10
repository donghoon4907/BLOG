import React, { FC, useCallback } from "react";
import { Profile } from "../icon";
import { useLocalDispatch } from "../../context";
import { SHOW_LOGIN_MODAL, SET_ME } from "../../context/action";
import { getAccessToken, removeAccessToken } from "../../lib/token";

/**
 * 내 정보 아이콘 컴포넌트
 *
 * @Component
 * @author frisk
 */
const ProfileButton: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 클릭 핸들러
   */
  const handleClick = useCallback(() => {
    /**
     * 토큰 가져오기
     */
    const token = getAccessToken();
    if (token) {
      const tf = confirm("로그아웃 하시겠습니까?");
      if (tf) {
        /**
         * 토큰 삭제
         */
        removeAccessToken();
        /**
         * 로컬 상태 갱신
         */
        dispatch({
          type: SET_ME,
          id: null,
          nickname: null,
          email: null,
          avatar: null,
          isMaster: false
        });
      }
    } else {
      /**
       * 로그인 모달 보이기
       */
      dispatch({
        type: SHOW_LOGIN_MODAL
      });
    }
  }, []);

  return (
    <div onClick={handleClick}>
      <Profile />
    </div>
  );
};

export default ProfileButton;
