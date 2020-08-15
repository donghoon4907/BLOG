import React, { FC } from "react";
import styled from "styled-components";

// 240p = 68%
const Container = styled.div`
  position: relative;

  &:after {
    content: "";
    padding-bottom: 57%;
    display: block;
  }
`;

const Wrapper = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &:focus {
    outline: none;
  }
`;

type Props = {
  src: string;
};

const Video: FC<Props> = ({ src }) => (
  <Container>
    <Wrapper controls preload="metadata">
      <source src={`${src}#t=1`} type="video/mp4" />
    </Wrapper>
  </Container>
);

export default Video;
