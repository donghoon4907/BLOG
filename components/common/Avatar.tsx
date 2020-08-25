import React, { FC, MouseEvent, ReactNode } from "react";
import styled from "styled-components";

interface AvatarContainer {
  size: number | string;
}

const Container = styled.div<AvatarContainer>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: ${props => props.theme.boxBorder};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  & #dropdown-custom-2 {
    opacity: 0;
  }
`;

interface Props extends AvatarContainer {
  src: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
}

const Avatar: FC<Props> = ({ size, src, onClick, children }) => (
  <Container onClick={onClick} size={size}>
    <img src={src} alt="avatar" />
    {children}
  </Container>
);

export default Avatar;
