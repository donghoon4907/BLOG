import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { Profile } from "../icon";
import { useVssDispatch, SET_LOGIN_MODAL, SET_ME } from "../../context";
import { getAccessToken, removeAccessToken } from "../../lib/token";

const Container = styled.div`
  ${props => props.theme.media.tablet} {
    display: none;
  }
`;

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
          id: "",
          nickname: "",
          email: "",
          avatar: null,
          isMaster: false
        });
      }
    } else {
      dispatch({
        type: SET_LOGIN_MODAL,
        payload: true
      });
    }
  }, []);

  return (
    <Container onClick={handleClick}>
      <Profile style={{ width: 24, height: 24 }} />
    </Container>
  );
};

export default ProfileButton;
