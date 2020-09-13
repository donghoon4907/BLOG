import React, { useCallback, FC } from "react";
import styled from "styled-components";
import { useLocalState, useLocalDispatch } from "../../context";
import { SEARCH_POST } from "../../context/action";
import searchOptions from "./search_options.json";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const FilterWrapper = styled.span`
  ${props => props.theme.whiteBox};
  display: inline-block;
  padding: 10px;

  & + & {
    margin-left: 10px;
  }
`;
/**
 * 검색 옵션 로드
 */
const sortAndFilter = searchOptions.sort.concat(searchOptions.filter);

/**
 * * 검색 태그 컴포넌트
 *
 * @Component
 * @author frisk
 */
const SearchTag: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 관리 모듈 활성화
   */
  const {
    searchPostOption: { orderBy, filter = [] }
  } = useLocalState();
  /**
   * 검색 태그 삭제 핸들러
   * @param v 검색 옵션
   */
  const handleRemoveFilter = useCallback(
    v => {
      dispatch({
        type: SEARCH_POST,
        filter: filter.filter(v2 => v2 !== v)
      });
    },
    [filter]
  );

  return (
    <Container>
      {orderBy && (
        <FilterWrapper key={orderBy}>
          {(sortAndFilter.find(v => v.value === orderBy) as any).text}
        </FilterWrapper>
      )}
      {filter.map(v => (
        <FilterWrapper key={v}>
          {(sortAndFilter.find(v2 => v2.value === v) as any).text}

          <span
            aria-hidden="true"
            style={{ marginLeft: 10, cursor: "pointer" }}
            onClick={() => handleRemoveFilter(v)}
          >
            ×
          </span>
        </FilterWrapper>
      ))}
    </Container>
  );
};

export default SearchTag;
