import React, { FC, useState, useCallback, ChangeEvent } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import {
  useVssDispatch,
  useVssState,
  SEARCH_POST,
  HIDE_FILTER_BAR
} from "../../context";
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
 * Search filter component
 *
 * @Component
 * @author frisk
 */
const SearchFilter: FC = () => {
  const dispatch = useVssDispatch();
  const {
    searchPostOption: { orderBy }
  } = useVssState();
  const [sort, setSort] = useState<string>(orderBy);
  const [filter, setFilter] = useState<string[]>([]);

  const handleChangeSort = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
  }, []);

  const handleChangeFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      setFilter(prev => prev.concat(value));
    } else {
      setFilter(prev => prev.filter(v => v !== value));
    }
  }, []);

  const handleSubmit = useCallback(() => {
    dispatch({
      type: SEARCH_POST,
      orderBy: sort,
      filter
    });
    dispatch({
      type: HIDE_FILTER_BAR
    });
  }, [sort, filter]);
  return (
    <FilterWrapper>
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
                checked={sort === v.value}
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
                disabled
              />
              <label htmlFor={v.id}>{v.text}</label>
            </span>
          ))}
        </FilterSelector>
      </FilterColumn>
      <FilterColumn>
        <Button text="적용" onClick={handleSubmit} />
      </FilterColumn>
    </FilterWrapper>
  );
};

export default SearchFilter;
