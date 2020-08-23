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

const setTag = (obj: any) =>
  Object.keys(obj)
    .filter(v => obj[v] && v !== "keyword")
    .reduce((acc, v) => {
      if (v === "filter") {
        const splitFilter = obj[v].split(",");
        splitFilter.forEach(v2 => {
          acc.push({
            query: v,
            value: v2,
            text: searchOptions[v].filter(v3 => v3.value === v2)[0].text
          });
        });
      } else {
        acc.push({
          query: v,
          value: obj[v],
          text: searchOptions[v].filter(v2 => v2.value === obj[v])[0].text
        });
      }
      return acc;
    }, [] as any);

const SearchTag = () => {
  const router = useRouter();
  const [filters, setFilters] = useState<any>(setTag(router.query));

  const handleRemove = useCallback(
    text => {
      const nextFilters = filters.filter(v => v.text !== text);
      const keyword = router.query.keyword;
      let sort = "";
      const findSort = nextFilters.filter(v => v.query === "sort");
      if (findSort.length > 0) {
        sort = findSort[0].value;
      }
      const filter = nextFilters
        .filter(v => v.query !== "sort")
        .map(v => v.value)
        .join(",");

      router.push(`/search?keyword=${keyword}&sort=${sort}&filter=${filter}`);
    },
    [filters, router.query]
  );

  useEffect(() => {
    setFilters(setTag(router.query));
  }, [router.query]);

  return (
    <Container>
      {filters.map(v => (
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
