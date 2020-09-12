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
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../graphql/post/query";
import Input from "../common/Input";
import Button from "../common/Button";
import { Label } from "../common/Form";

const SearchForm = styled.form`
  position: relative;
  margin: 0 auto;
  width: 500px;

  ${props => props.theme.media.tablet} {
    width: calc(100% - 2rem);
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled(Input)`
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

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  & > * {
    margin-right: 10px;
  }
`;

/**
 * 검색 바 컴포넌트
 *
 * @Component
 * @author frisk
 */
const HeaderSearchBar = () => {
  /**
   * 라우터 모듈 활성화
   */
  const router = useRouter();
  /**
   * 추천 카테고리 로드
   */
  const { data } = useQuery(GET_CATEGORIES, {
    variables: {
      first: 3,
      orderBy: "useCount_DESC"
    }
  });
  /**
   * 검색어 상태 관리 모듈 활성화
   */
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  /**
   * search input element
   */
  const $search = useRef<HTMLInputElement>(null);
  /**
   * 검색어 변경 핸들러
   */
  const handleChangeSearchKeyword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(e.target.value);
    },
    []
  );
  /**
   * 검색 요청 핸들러
   */
  const handleSearchSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      /**
       * 검색어 입력을 안한 경우
       */
      if (!searchKeyword) {
        return alert("검색어를 입력하세요");
      }
      /**
       * 페이지 이동
       */
      router.push(`/search/${searchKeyword}`);
    },
    [searchKeyword]
  );
  /**
   * 마운트 콜백 모듈 활성화
   */
  useEffect(() => {
    const node = $search.current;
    /**
     * 검색바 커서 활성화
     */
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
      <CategoryWrapper>
        <h6>추천 카테고리</h6>
        {data.categories.map(category => (
          <span key={category.id}>
            <Button>{category.content}</Button>
          </span>
        ))}
      </CategoryWrapper>
    </SearchForm>
  );
};

export default HeaderSearchBar;
