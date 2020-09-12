import { useRouter } from "next/router";
import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import Input from "../common/Input";
import Button from "../common/Button";
import { Label } from "../common/Form";
import { Search, Filter } from "../icon";
import searchOptions from "./search_options.json";
// import SearchResult from "../common/SearchResult";
// import { useDebounce } from "../../hooks";

const SearchForm = styled.form`
  position: relative;
  margin: 0 auto;
  width: 100%;
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

const IconWrapper = styled.div`
  position: absolute;
  right: 35px;
  top: 5px;
`;

const FilterWrapper = styled.div<{ activeFilter: boolean }>`
  ${props => props.theme.whiteBox};
  margin-top: 5px;
  width: 100%;
  height: auto;
  display: ${props => (props.activeFilter ? "flex" : "none")};
  flex-direction: column;
`;

const FilterColumn = styled.div`
  display: flex;
  justfiy-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const FilterCategory = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 10px;
`;

const FilterSelector = styled.div`
  font-size: 16px;
  padding: 10px;
  flex: 1;

  & input {
    margin-right: 5px;
  }

  & span {
    margin-left: 10px;
  }
`;

/**
 * Search bar component
 *
 * @Component
 * @author frisk
 */
const SearchBar = () => {
  const router = useRouter();
  let keyword: any, orderBy: any;

  if (router.query.keyword && router.query.keyword.length > 0) {
    (router.query.keyword as any).forEach(v => {
      const splitQuery = v.split("=");
      if (splitQuery[0] === "searchKeyword") {
        keyword = splitQuery[1];
      } else if (splitQuery[0] === "sort") {
        orderBy = splitQuery[1];
      }
    });
  }

  const [activeFilter, setActiveFilter] = useState<boolean>(false);
  const [sort, setSort] = useState<string>(orderBy || "");
  const [filters, setFilters] = useState<string[]>([]);
  const [search, setSearch] = useState<string>(keyword || "");
  // const [searchKeyword, setSearchKeyword] = useDebounce("", 500);

  const handleClickFilter = useCallback(() => {
    setActiveFilter(!activeFilter);
  }, [activeFilter]);

  const handleChangeSort = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
  }, []);

  const handleChangeFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      setFilters(prev => prev.concat(value));
    } else {
      setFilters(prev => prev.filter(v => v !== value));
    }
  }, []);

  const handleChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // setSearchKeyword(e.target.value);
  }, []);

  const handleSearchSubmit = useCallback(
    (e: FormEvent<any>) => {
      e.preventDefault();
      if (!search) {
        return alert("검색어를 입력하세요");
      }
      setActiveFilter(false);

      let url = "/search";
      if (search) {
        url += `/searchKeyword=${search}`;
      }
      if (sort) {
        url += `/orderBy=${sort}`;
      }
      filters.forEach(v => {
        url += `/filter=${v}`;
      });
      router.push(url);
    },
    [search, sort, filters]
  );
  return (
    <SearchForm onSubmit={handleSearchSubmit}>
      <Label htmlFor="search" val={search}>
        검색어를 입력하세요.
      </Label>
      <Wrapper>
        <SearchInput
          placeholder="검색어를 입력하세요."
          name="search"
          value={search}
          onChange={handleChangeSearch}
          autoComplete="off"
        />

        <IconWrapper onClick={handleSearchSubmit}>
          <Search />
        </IconWrapper>
        <div onClick={handleClickFilter}>
          <Filter style={{ width: 30, height: 30 }} />
        </div>
      </Wrapper>
      <FilterWrapper activeFilter={activeFilter}>
        <FilterColumn>
          <FilterCategory>정렬</FilterCategory>
          <FilterSelector>
            {searchOptions.sort.map(v => (
              <span key={v.id}>
                <input
                  type="radio"
                  name="radio"
                  id={v.id}
                  value={v.value}
                  onChange={handleChangeSort}
                />
                <label htmlFor={v.id}>{v.text}</label>
              </span>
            ))}
          </FilterSelector>
        </FilterColumn>
        <FilterColumn>
          <FilterCategory>상태</FilterCategory>
          <FilterSelector>
            {searchOptions.filter.map(v => (
              <span key={v.id}>
                <input
                  type="checkbox"
                  name="checkbox"
                  id={v.id}
                  value={v.value}
                  onChange={handleChangeFilter}
                />
                <label htmlFor={v.id}>{v.text}</label>
              </span>
            ))}
          </FilterSelector>
        </FilterColumn>
        <FilterColumn>
          <Button type="submit">적용</Button>
        </FilterColumn>
      </FilterWrapper>
    </SearchForm>
  );
};

export default SearchBar;
