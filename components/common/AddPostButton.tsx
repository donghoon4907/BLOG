import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { AddPost } from "../icon";
import { useVssDispatch, SHOW_POST_MODAL } from "../../context";

const Container = styled.div`
  ${props => props.theme.media.tablet} {
    display: none;
  }
`;

const AddPostButton: FC = () => {
  const dispatch = useVssDispatch();

  const handleClick = useCallback(() => {
    dispatch({
      type: SHOW_POST_MODAL,
      isShow: true
    });
  }, []);

  return (
    <Container onClick={handleClick}>
      <AddPost style={{ width: 40, height: 40 }} />
    </Container>
  );
};

export default AddPostButton;
