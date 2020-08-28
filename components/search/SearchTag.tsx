import React, { useCallback, FC } from "react";
import styled from "styled-components";
import { useVssState, useVssDispatch, SEARCH_POST } from "../../context";
import searchOptions from "./search_options.json";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const FilterWrapper = styled.span`
  ${(props) => props.theme.whiteBox};
  display: inline-block;
  padding: 10px;

  & + & {
    margin-left: 10px;
  }
`;

const sortAndFilter = searchOptions.sort.concat(searchOptions.filter);

const SearchTag: FC = () => {
  const dispatch = useVssDispatch();
  const {
    searchPostOption: { orderBy, filter = [] }
  } = useVssState();

  const handleRemoveFilter = useCallback(
    (v) => {
      dispatch({
        type: SEARCH_POST,
        filter: filter.filter((v2) => v2 !== v)
      });
    },
    [filter]
  );

  return (
    <Container>
      {orderBy && (
        <FilterWrapper key={orderBy}>
          {(sortAndFilter.find((v) => v.value === orderBy) as any).text}
        </FilterWrapper>
      )}
      {filter.map((v) => (
        <FilterWrapper key={v}>
          {(sortAndFilter.find((v2) => v2.value === v) as any).text}

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
