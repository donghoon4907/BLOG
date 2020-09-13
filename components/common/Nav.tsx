import React, { FC, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useLocalState, useLocalDispatch } from "../../context";
import { EXPAND_NAVIGATION, CONTRACT_NAVIGATION } from "../../context/action";
import { getCollapse, setCollapse } from "../../lib/collapse";
import { Collapse } from "../icon";
import RecommandUserList from "./RecommandUserList";

const Container = styled.div<{ collapse: string }>`
  background: #efeff1;
  width: ${props => (props.collapse === "expand" ? 230 : 60)}px;
  height: calc(100vh - 3rem);
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 8px;
  position: fixed;
  top: 3rem;

  & svg {
    transform: rotate(${props => (props.collapse === "expand" ? 0 : 180)}deg);
  }

  ${props => props.theme.media.desktop} {
    display: none;
  }
`;

const Top = styled.div<{ collapse: string }>`
  display: flex;
  justify-content: ${props =>
    props.collapse === "expand" ? "space-between" : "center"};
  align-items: center;
  padding-top: 10px;
  padding-bottom: 1rem;

  & > h6 {
    margin-bottom: 0px;
    display: ${props => (props.collapse === "expand" ? "block" : "none")};
  }
`;

/**
 * 공통 네비게이션 컴포넌트
 *
 * @Component
 * @author frisk
 */
const Nav: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const { isCollapseNav } = useLocalState();
  /**
   * 확장 아이콘 클릭 이벤트
   */
  const handleClickCollapse = useCallback(() => {
    if (isCollapseNav === "expand") {
      setCollapse("contract");
      dispatch({
        type: CONTRACT_NAVIGATION
      });
    } else {
      setCollapse("expand");
      dispatch({
        type: EXPAND_NAVIGATION
      });
    }
  }, [isCollapseNav]);
  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    const isCollapse = getCollapse() as string;
    /**
     * 로컬 상태 업데이트
     */
    if (isCollapse === "contract") {
      dispatch({
        type: CONTRACT_NAVIGATION
      });
    }
  }, []);

  return (
    <Container collapse={isCollapseNav}>
      <Top collapse={isCollapseNav}>
        <h6>추천 블로그</h6>
        <div onClick={handleClickCollapse}>
          <Collapse />
        </div>
      </Top>
      <RecommandUserList />
    </Container>
  );
};

export default Nav;
