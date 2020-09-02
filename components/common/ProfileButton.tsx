import React, { FC, useCallback } from "react";
import { Profile } from "../icon";
import { useVssDispatch, SHOW_LOGIN_MODAL, SET_ME } from "../../context";
import { getAccessToken, removeAccessToken } from "../../lib/token";

/**
 * Profile icon component in header
 *
 * @Component
 * @author frisk
 */
const ProfileButton: FC = () => {
  const dispatch = useVssDispatch();

  const handleClick = useCallback(() => {
    const token = getAccessToken();
    if (token) {
      const tf = confirm("로그아웃 하시겠습니까?");
      if (tf) {
        removeAccessToken();
        dispatch({
          type: SET_ME,
          userId: null,
          nickname: null,
          email: null,
          avatar: null,
          isMaster: false
        });
      }
    } else {
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
