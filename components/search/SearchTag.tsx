import { useRouter } from "next/router";
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
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

const sortAndFilter = searchOptions.sort.concat(searchOptions.filter);

const setTag = (keyword: any) =>
  keyword.map(v => {
    const splitQuery = v.split("=");
    return {
      query: splitQuery[0],
      value: splitQuery[1],
      text:
        splitQuery[0] !== "searchKeyword"
          ? sortAndFilter.filter(v2 => v2.value === splitQuery[1])[0].text
          : ""
    };
  });

const SearchTag = () => {
  const router = useRouter();
  const [filters, setFilters] = useState<any>(
    router.query.keyword ? setTag(router.query.keyword) : []
  );

  const handleRemove = useCallback(
    text => {
      const nextFilters = filters.filter(v => v.text !== text);
      setFilters(nextFilters);
      const keyword = nextFilters.find(v => v.query === "searchKeyword");
      const sort = nextFilters.find(v => v.query === "orderBy");
      const filter = nextFilters.filter(v => v.query === "filter");

      let url = `/search/searchKeyword=${keyword.value}`;
      if (sort) {
        url += `/orderBy=${sort.value}`;
      }
      filter.forEach(v => {
        url += `/filter=${v.value}`;
      });
      router.push(url);
    },
    [filters, router.query]
  );

  useEffect(() => {
    setFilters(router.query.keyword ? setTag(router.query.keyword) : []);
  }, [router.query.keyword]);

  return (
    <Container>
      {filters
        .filter(v => v.text)
        .map(v => (
          <FilterWrapper key={v.value}>
            {v.text}
            <span
              aria-hidden="true"
              style={{ marginLeft: 10, cursor: "pointer" }}
              onClick={() => handleRemove(v.text)}
            >
              ×
            </span>
          </FilterWrapper>
        ))}
    </Container>
  );
};

export default SearchTag;
