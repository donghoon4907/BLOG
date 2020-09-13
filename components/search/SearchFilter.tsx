import React, { FC, useState, useCallback, ChangeEvent } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useLocalDispatch, useLocalState } from "../../context";
import { SEARCH_POST, HIDE_FILTER_BAR } from "../../context/action";
import searchOptions from "./search_options.json";

const FilterWrapper = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const FilterColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const FilterCategory = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: left;
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
 * * 검색 필터 컴포넌트
 *
 * @Component
 * @author frisk
 */
const SearchFilter: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const {
    searchPostOption: { orderBy }
  } = useLocalState();
  /**
   * 정렬 상태 관리 모듈 활성화
   */
  const [sort, setSort] = useState<string>(orderBy);
  /**
   * 필터 상태 관리 모듈 활성화
   */
  const [filter, setFilter] = useState<string[]>([]);
  /**
   * 정렬 변경 핸들러
   */
  const handleChangeSort = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
  }, []);
  /**
   * 필터 변경 핸들러
   */
  const handleChangeFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      setFilter(prev => prev.concat(value));
    } else {
      setFilter(prev => prev.filter(v => v !== value));
    }
  }, []);
  /**
   * 검색 핸들러
   */
  const handleSubmit = useCallback(() => {
    /**
     * 검색
     */
    dispatch({
      type: SEARCH_POST,
      orderBy: sort,
      filter
    });
    /**
     * 필터바 숨기기
     */
    dispatch({
      type: HIDE_FILTER_BAR
    });
  }, [sort, filter]);

  return (
    <FilterWrapper>
      <FilterColumn>
        <FilterCategory>정렬</FilterCategory>
        <FilterSelector>
          {searchOptions.sort
            .filter(v => v.enable)
            .map(v => (
              <span key={v.id}>
                <input
                  type="radio"
                  name="radio"
                  id={v.id}
                  value={v.value}
                  checked={sort === v.value}
                  onChange={handleChangeSort}
                />
                <label htmlFor={v.id}>{v.text}</label>
              </span>
            ))}
        </FilterSelector>
      </FilterColumn>
      {/* <FilterColumn>
        <FilterCategory>상태</FilterCategory>
        <FilterSelector>
          {searchOptions.filter
            .filter(v => v.enable)
            .map(v => (
              <span key={v.id}>
                <input
                  type="checkbox"
                  name="checkbox"
                  id={v.id}
                  value={v.value}
                  onChange={handleChangeFilter}
                  disabled
                />
                <label htmlFor={v.id}>{v.text}</label>
              </span>
            ))}
        </FilterSelector>
      </FilterColumn> */}
      <FilterColumn>
        <Button onClick={handleSubmit}>적용</Button>
      </FilterColumn>
    </FilterWrapper>
  );
};

export default SearchFilter;
