import React, { FC } from "react";
import styled from "styled-components";
import Spinner from "react-loader-spinner";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const Loader: FC = () => (
  <Container>
    <Spinner
      type="ThreeDots"
      color="#4142DD"
      height={80}
      width={80}
      visible={true}
    />
  </Container>
);

export default Loader;
