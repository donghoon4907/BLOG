import { useRouter } from "next/router";
import React, {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FormEvent,
  useRef
} from "react";
import styled from "styled-components";
import Input from "../common/Input";
import { Label } from "../common/Form";

export const SearchForm = styled.form`
  position: relative;
  margin: 0 auto;
  width: 500px;

  ${props => props.theme.media.tablet} {
    width: calc(100% - 2rem);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const SearchInput = styled(Input)`
  background: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  text-align: center;
  position: relative;

  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

/**
 * Search bar component in header
 *
 * @Component
 * @author frisk
 */
const HeaderSearchBar = () => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const $search = useRef<HTMLInputElement>(null);

  const handleChangeSearchKeyword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(e.target.value);
    },
    []
  );

  const handleSearchSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!searchKeyword) {
        return alert("검색어를 입력하세요");
      }
      router.push(`/search/${searchKeyword}`);
    },
    [searchKeyword]
  );

  useEffect(() => {
    const node = $search.current;
    if (node) {
      node.focus();
    }
  }, []);
  return (
    <SearchForm onSubmit={handleSearchSubmit}>
      <Label htmlFor="search" val={searchKeyword}>
        검색어를 입력하세요.
      </Label>
      <Wrapper>
        <SearchInput
          placeholder="검색어를 입력하세요."
          name="search"
          value={searchKeyword}
          onChange={handleChangeSearchKeyword}
          autoComplete="off"
          ref={$search}
        />
      </Wrapper>
    </SearchForm>
  );
};

export default HeaderSearchBar;
