import React, { FC, MouseEvent } from "react";
import styled from "styled-components";

interface AvatarContainer {
  /**
   * Container size
   */
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
  /**
   * * Image source
   */
  src: string;
  /**
   * * Handler for click
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

/**
 * Common avatar component
 *
 * @Component
 * @author frisk
 * @param props.size Container size
 * @param props.src Image source
 * @param props.onClick Handler for click
 */
const Avatar: FC<Props> = ({ size, src, onClick, children }) => (
  <Container onClick={onClick} size={size}>
    <img src={src} alt="avatar" />
    {children}
  </Container>
);

export default Avatar;
