import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { AddPost } from "../icon";
import { useVssDispatch, SHOW_POST_MODAL } from "../../context";

const Container = styled.div`
  position: fixed;
  bottom: 30px;
  width: 912px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  ${props => props.theme.media.desktop} {
    width: 768px;
  }

  ${props => props.theme.media.tablet} {
    width: calc(100% - 2rem);
  }
`;

const AddPostBtn: FC = () => {
  const dispatch = useVssDispatch();

  const handleClick = useCallback(() => {
    dispatch({
      type: SHOW_POST_MODAL,
      isShow: true
    });
  }, []);

  return (
    <Container>
      <div onClick={handleClick}>
        <AddPost style={{ width: 50, height: 50 }} />
      </div>
    </Container>
  );
};

export default AddPostBtn;
