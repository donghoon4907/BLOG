import { useRouter } from "next/router";
import React, { FC } from "react";
import styled from "styled-components";

interface AvatarContainer {
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
  userId: string;
  src: string;
}

/**
 * * 공통 프로필 사진 컴포넌트
 *
 * @Component
 * @author frisk
 * @param props.userId 사용자 ID
 * @param props.size 프로필 사진 크기
 * @param props.src 이미지 자원
 */
const Avatar: FC<Props> = ({ userId, size, src }) => {
  /**
   * 라우터 모듈 활성화
   */
  const router = useRouter();
  /**
   * 클릭 핸들러
   */
  return (
    <Container
      size={size}
      role="button"
      onClick={() => router.push(`/user/${userId}`)}
    >
      <img src={src} alt="avatar" />
    </Container>
  );
};

export default Avatar;
