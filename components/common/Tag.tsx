import React, { FC, MouseEvent } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background: ${props => props.theme.infoColor};
  opacity: 0.8;
  color: white;
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 0.75rem;
  transition: all 0.125s ease-in 0s;
  display: flex;
  align-items: center;
`;

interface Props {
  /**
   * 클릭 핸들러
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

/**
 * * 공통 태그 컴포넌트
 *
 * @Component
 * @author frisk
 * @param props.onClick 클릭 핸들러
 */
const Tag: FC<Props> = ({ onClick, children }) => (
  <Container onClick={onClick}>{children}</Container>
);
export default Tag;
