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
   * * Button text
   */
  text: string;
  /**
   * * Handler for click
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * * Class
   */
  className?: string;
  /**
   * * Button type
   */
  type?: "button" | "submit" | "reset";
}

/**
 * Common button component
 *
 * @Component
 * @author frisk
 * @param props.text Button text
 * @param props.className Class
 * @param props.onClick Handler for click
 * @param props.type Button type
 */
const Button: FC<Props> = ({ text, className, onClick, type = "button" }) => (
  <Container className={className} onClick={onClick} type={type}>
    {text}
  </Container>
);
export default Button;
