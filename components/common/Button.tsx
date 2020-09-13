import { useRouter } from "next/router";
import React, { FC, MouseEvent, useCallback, useEffect } from "react";
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
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  action?: "category";
}

/**
 * * 공통 버튼 컴포넌트
 *
 * @Component
 * @author frisk
 * @param props.onClick 클릭 핸들러
 * @param props.type 버튼 타입
 */
const Button: FC<Props> = ({ onClick, type = "button", children, action }) => {
  /**
   * 라우터 모듈 활성화
   */
  const router = useRouter();
  /**
   * 클릭 핸들러
   */
  const handleClick = useCallback(() => {
    if (action === "category" && typeof children === "string") {
      router.push(`/category/${children}`);
    }
  }, [action]);

  useEffect(() => {
    if (onClick && action) {
      throw new Error("Both onClick and action cannot be input.");
    }
  }, []);
  return (
    <Container onClick={action ? handleClick : onClick} type={type}>
      {children}
    </Container>
  );
};
export default Button;
