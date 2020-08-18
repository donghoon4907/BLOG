import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { Profile } from "../icon";
import { useVssDispatch, SHOW_POST_MODAL } from "../../context";

const Container = styled.div`
  ${props => props.theme.media.tablet} {
    display: none;
  }
`;

const ProfileButton: FC = () => {
  const dispatch = useVssDispatch();

  const handleClick = useCallback(() => {
    dispatch({
      type: SHOW_POST_MODAL,
      isShow: true
    });
  }, []);

  return (
    <Container onClick={handleClick}>
      <Profile style={{ width: 24, height: 24 }} />
    </Container>
  );
};

export default ProfileButton;
