import React, { FC, MouseEvent } from "react";
import styled from "styled-components";

interface AvatarContainer {
  /**
   * 프로필 사진 크기
   */
  size: number | string;
}

const Container = styled.div<AvatarContainer>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: ${props => props.theme.boxBorder};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

interface Props extends AvatarContainer {
  /**
   * 이미지 자원
   */
  src: string;
  /**
   * 클릭 핸들러
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

/**
 * * 공통 프로필 사진 컴포넌트
 *
 * @Component
 * @author frisk
 * @param props.size 프로필 사진 크기
 * @param props.src 이미지 자원
 * @param props.onClick 클릭 핸들러
 */
const Avatar: FC<Props> = ({ size, src, onClick }) => (
  <Container onClick={onClick} size={size} role="button">
    <img src={src} alt="avatar" />
  </Container>
);

export default Avatar;
