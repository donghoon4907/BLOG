import React, { FC } from "react";
import styled from "styled-components";
import Link from "./Link";
import AddPostButton from "../common/AddPostButton";
import ProfileButton from "../common/ProfileButton";
import SearchButton from "../common/SearchButton";

const Container = styled.header`
  height: 4rem;
  width: 100%;
  background: white;
  position: fixed;
  border-bottom: ${props => props.theme.boxBorder};
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 912px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;

  ${props => props.theme.media.desktop} {
    width: 768px;
  }

  ${props => props.theme.media.tablet} {
    width: calc(100% - 2rem);
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    margin-left: 10px;
  }
`;

const Logo = styled.span`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 5px;
  cursor: pointer;
`;

const Header: FC = () => (
  <Container>
    <Wrapper>
      <Column>
        <Link href="/">
          <Logo>VSS</Logo>
        </Link>
      </Column>
      <Column>
        <SearchButton />
        <AddPostButton />
        <ProfileButton />
      </Column>
    </Wrapper>
  </Container>
);

export default Header;
