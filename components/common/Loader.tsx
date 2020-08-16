import React, { FC } from "react";
import styled from "styled-components";
import { CircleToBlockLoading } from "react-loadingg";

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
`;

const Loader: FC = () => (
  <Container>
    <CircleToBlockLoading color="#3897f0" style={{ zIndex: 10000 }} />
  </Container>
);

export default Loader;
