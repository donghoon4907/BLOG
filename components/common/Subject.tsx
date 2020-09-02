import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div<{ activeBorder?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => props.activeBorder && `2px solid gray`};
  padding: 8px 5px;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

interface Props {
  /**
   * * Whether to draw a border
   */
  activeBorder?: boolean;
}

/**
 * Common subject component
 *
 * @Component
 * @author frisk
 * @param activeBorder Whether to draw a border
 */
const Subject: FC<Props> = ({ children, activeBorder }) => (
  <Container activeBorder={activeBorder}>{children}</Container>
);

export default Subject;
