import Router from "next/router";
import Link from "next/link";
import React, { useState, useCallback, FC } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import Input from "./Input";
import Avatar from "./Avatar";
import { Label } from "./Form";
import SearchResult from "./SearchResult";
import { useDebounce } from "../../hooks";
import { logOutMutation } from "../../graphql/auth/mutation/logout";

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

  ${props => props.theme.middleQuery`width:912px`}
  ${props => props.theme.smallQuery`width:768px`}
  ${props => props.theme.tabletQuery`width:calc(100% - 2rem)`}
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 5px;
`;

const SearchForm = styled.form`
  width: 300px;
  position: relative;
  ${props => props.theme.tabletQuery`width:150px`}
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
  const [search, setSearch] = useState(
    ""
    // Router.pathname === "/search"
    //   ? decodeURIComponent(Router.query.keyword)
    //   : ""
  );
  const [searchKeyword, setSearchKeyword] = useDebounce("", 300);

  const [logoutMutation] = useMutation(logOutMutation);

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
      logoutMutation();
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <Column>
          <Link href="/">
            <a>VSS</a>
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
            {/* <StyledAvatar size="38" src={data.getMyProfile.avatar.url}>
              <Dropdown.Toggle id="dropdown-custom-2" />
            </StyledAvatar> */}

            <Dropdown.Menu>
              <Dropdown.Item
                eventKey="1"
                onClick={() => Router.push("/post/new")}
              >
                포스트 등록
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2" onClick={handleLogout}>
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
