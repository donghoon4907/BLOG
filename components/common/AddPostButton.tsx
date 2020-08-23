import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { AddPost } from "../icon";
import {
  useVssDispatch,
  SHOW_POST_MODAL,
  SHOW_LOGIN_MODAL
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
        postId: "",
        title: "",
        description: "",
        status: "PUBLIC",
        url: ""
      });
    } else {
      dispatch({
        type: SHOW_LOGIN_MODAL
      });
    }
  }, []);

  return (
    <Container onClick={handleClick} title="포스트 등록">
      <AddPost style={{ width: 40, height: 40 }} />
    </Container>
  );
};

export default AddPostButton;
