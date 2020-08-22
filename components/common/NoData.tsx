import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const NoData: FC = ({ children }) => <Container>{children}</Container>;

export default NoData;
