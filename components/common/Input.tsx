import React, { forwardRef, ChangeEvent, HTMLAttributes } from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.bgColor};
  width: 100%;
  height: 35px;
  padding: 0px 15px;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;

interface Props extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  autoComplete?: string;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Container ref={ref} {...props} />
));

export default Input;
