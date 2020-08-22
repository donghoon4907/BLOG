import Router from "next/router";
import React, { useState, useCallback, FC, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input";
import { Label } from "./Form";
import SearchResult from "./SearchResult";
import { useDebounce } from "../../hooks";
import { useVssState } from "../../context";
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
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 5px;
  color: black;
  cursor: pointer;
`;

const SearchForm = styled.form<{ isShowSearchBar: boolean }>`
  width: ${props => (props.isShowSearchBar ? 200 : 0)}px;
  opacity: ${props => (props.isShowSearchBar ? 1 : 0)};
  position: relative;
  transition: width 1s;

  ${props => props.theme.media.tablet} {
    width: 150px;
  }
`;

const SearchInput = styled(Input)`
  background: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  text-align: center;

  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const Header: FC = () => {
  const { isShowSearchBar } = useVssState();

  const [search, setSearch] = useState("");
  const [searchKeyword, setSearchKeyword] = useDebounce("", 300);

  const handleChangeSearch = useCallback(e => {
    setSearch(e.target.value);
    setSearchKeyword(e.target.value);
  }, []);

  const handleSearchSubmit = useCallback(
    e => {
      e.preventDefault();
      Router.push(`/search/${search}/createdAt_DESC`);
    },
    [search]
  );

  useEffect(() => {
    setSearch(
      Router.pathname === "/search"
        ? decodeURIComponent(Router.query.keyword as any)
        : ""
    );
  }, []);

  return (
    <Container>
      <Wrapper>
        <Column>
          <Link href="/">
            <Logo>VSS</Logo>
          </Link>
        </Column>
        <Column>
          <SearchForm
            onSubmit={handleSearchSubmit}
            isShowSearchBar={isShowSearchBar}
          >
            <Label htmlFor="search" val={search}>
              검색어를 입력하세요.
            </Label>
            <SearchInput
              placeholder="검색어를 입력하세요."
              name="search"
              value={search}
              onChange={handleChangeSearch}
              autoComplete="off"
            />
            {searchKeyword && (
              <SearchResult
                searchKeyword={searchKeyword}
                setSearch={setSearch}
                setSearchKeyword={setSearchKeyword}
              />
            )}
          </SearchForm>
          <SearchButton />
          <AddPostButton />
          <ProfileButton />
        </Column>
      </Wrapper>
    </Container>
  );
};

export default Header;
