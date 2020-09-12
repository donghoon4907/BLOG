import React, { FC, MouseEvent } from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background: ${props => props.theme.blueColor};
  text-align: center;
  padding: 7px;
  font-size: 14px;
  border: 1px solid ${props => props.theme.blueColor};

  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  /**
   * * Handler for click
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * * Button type
   */
  type?: "button" | "submit" | "reset";
}

/**
 * * 공통 버튼 컴포넌트
 *
 * @Component
 * @author frisk
 * @param props.onClick Handler for click
 * @param props.type Button type
 */
const Button: FC<Props> = ({ onClick, type = "button", children }) => (
  <Container onClick={onClick} type={type}>
    {children}
  </Container>
);
export default Button;
