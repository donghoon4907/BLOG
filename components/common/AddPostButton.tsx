import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { AddPost } from "../icon";
import {
  useVssDispatch,
  SHOW_POST_MODAL,
  SET_LOGIN_MODAL
} from "../../context";
import { getAccessToken } from "../../lib/token";

const Container = styled.div`
  ${props => props.theme.media.tablet} {
    display: none;
  }
`;

const AddPostButton: FC = () => {
  const dispatch = useVssDispatch();

  const handleClick = useCallback(() => {
    const token = getAccessToken();
    if (token) {
      dispatch({
        type: SHOW_POST_MODAL,
        isShow: true
      });
    } else {
      dispatch({
        type: SET_LOGIN_MODAL,
        payload: true
      });
    }
  }, []);

  return (
    <Container onClick={handleClick}>
      <AddPost style={{ width: 40, height: 40 }} />
    </Container>
  );
};

export default AddPostButton;
