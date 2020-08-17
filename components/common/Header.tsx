import Router from "next/router";
import React, { useState, useCallback, FC, Fragment, useEffect } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import Input from "./Input";
import Avatar from "./Avatar";
import { Label } from "./Form";
import SearchResult from "./SearchResult";
import { useDebounce } from "../../hooks";
import { removeAccessToken } from "../../lib/token";
import { meQuery } from "../../graphql/auth/query/me";
import { useVssDispatch, SET_ME } from "../../context";
import Link from "./Link";

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
`;

const Logo = styled.span`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 5px;
  color: black;
  cursor: pointer;
`;

const SearchForm = styled.form`
  width: 200px;
  position: relative;

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

const StyledAvatar = styled(Avatar)`
  & #dropdown-custom-2 {
    opacity: 0;
  }
`;

const Header: FC = () => {
  const dispatch = useVssDispatch();
  const { data, loading } = useQuery(meQuery, {
    fetchPolicy: "network-only"
  });
  const [search, setSearch] = useState(
    Router.pathname === "/search"
      ? decodeURIComponent(Router.query.keyword as any)
      : ""
  );
  const [searchKeyword, setSearchKeyword] = useDebounce("", 300);

  const handleChangeSearch = useCallback(e => {
    setSearch(e.target.value);
    setSearchKeyword(e.target.value);
  }, []);

  const handleSearchSubmit = useCallback(
    e => {
      e.preventDefault();
      Router.push(`/search?keyword=${search}`);
    },
    [search]
  );

  const handleLogout = useCallback(() => {
    if (confirm("로그아웃 하시겠습니까?")) {
      removeAccessToken();
      Router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (data && data.getMyProfile) {
      const { id, nickname, email, avatar, isMaster } = data.getMyProfile;
      dispatch({
        type: SET_ME,
        id,
        nickname,
        email,
        avatar,
        isMaster
      });
    }
  }, [data && data.getMyProfile]);

  if (loading) {
    return <Fragment />;
  }

  return (
    <Container>
      <Wrapper>
        <Column>
          <Link href="/">
            <Logo>VSS</Logo>
          </Link>
        </Column>
        <Column>
          <SearchForm onSubmit={handleSearchSubmit}>
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
        </Column>
        <Column>
          <Dropdown>
            <StyledAvatar size="38" src={data.getMyProfile.avatar.url}>
              <Dropdown.Toggle id="dropdown-custom-2" />
            </StyledAvatar>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1" onClick={handleLogout}>
                로그아웃
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Column>
      </Wrapper>
    </Container>
  );
};

export default Header;
