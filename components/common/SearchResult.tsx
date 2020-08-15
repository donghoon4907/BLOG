import Router from "next/router";
import React, { useCallback, Fragment } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { keywordQuery } from "../../graphql/search/query/keyword";

const Container = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 37px;
  left: 0;
  height: auto;
`;

const ContentType = styled.div`
  background: rgba(0, 0, 0, 0.03);
  font-size: 14px;
  padding: 5px;
  border-bottom: ${props => props.theme.boxBorder};
`;

const Item = styled.li`
  display: flex;
  justify-content: flex-start
  align-items: center;
  padding: 5px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
`;

const Title = styled.h3`
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${props => props.theme.tablet} {
    width: 100px;
  }
`;

export default ({ searchKeyword, setSearch, setSearchKeyword }) => {
  const { data, loading } = useQuery(keywordQuery, {
    variables: {
      searchKeyword
    },
    fetchPolicy: "no-cache"
  });

  const handleClickItem = useCallback(keyword => {
    Router.push(`/search?keyword=${keyword}`);
    setSearch(keyword);
    setSearchKeyword("");
  }, []);

  if (loading) {
    return <Fragment />;
  }

  return (
    <Container>
      <ContentType>연관 검색어</ContentType>
      <ol>
        {data.getSearchKeyword.length > 0 ? (
          data.getSearchKeyword.map(({ id, keyword }) => (
            <Item key={id} onClick={() => handleClickItem(keyword)}>
              <Title>{keyword}</Title>
            </Item>
          ))
        ) : (
          <Item>검색결과가 없습니다.</Item>
        )}
      </ol>
    </Container>
  );
};
