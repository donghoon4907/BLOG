import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.time`
  font-weight: 400;
  opacity: 0.5;
  display: inline-block;
  font-size: 12px;
`;

/**
 * * 공통 타임스탬프 컴포넌트
 *
 * @Component
 * @author frisk
 */
const Timestamp: FC = ({ children }) => <Container>{children}</Container>;

export default Timestamp;
