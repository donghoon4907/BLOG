import React, { FC } from "react";
import styled from "styled-components";
import { useLocalState } from "../../context";
import Link from "./Link";
import ProfileButton from "../common/ProfileButton";
import SearchButton from "../common/SearchButton";
import HeaderSearchBar from "./HeaderSearchBar";

const Container = styled.header`
  height: 3rem;
  width: 100%;
  background: white;
  position: fixed;
  border-bottom: ${props => props.theme.boxBorder};
  z-index: 2;
  box-shadow: ${props => props.theme.headerShadow};

  svg {
    fill: #1f2633;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > div {
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const SearchWrapper = styled.div`
  border: none;
  background: white;
  position: absolute;
  top: calc(3rem - 3px);
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px;
  box-shadow: ${props => props.theme.headerShadow};
`;

/**
 * 공통 헤더 컴포넌트
 *
 * @Component
 * @author frisk
 */
const Header: FC = () => {
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const { isShowSearchBar } = useLocalState();
  return (
    <Container>
      <Wrapper>
        <Column>
          <Link href="/">
            <Logo
              src="https://frisk.s3.ap-northeast-2.amazonaws.com/upload/4424b841-b125-4b9a-bcdf-a507ef751bed"
              alt="logo"
              role="link"
            />
          </Link>
        </Column>
        <Column>
          <SearchButton />
          <ProfileButton />
        </Column>
      </Wrapper>
      {isShowSearchBar && (
        <SearchWrapper>
          <HeaderSearchBar />
        </SearchWrapper>
      )}
    </Container>
  );
};

export default Header;
