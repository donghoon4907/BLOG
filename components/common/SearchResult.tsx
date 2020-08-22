import Router from "next/router";
import React, {
  useCallback,
  Fragment,
  Dispatch,
  SetStateAction,
  FC,
  memo
} from "react";
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
  overflow: hidden;
`;

const ContentType = styled.div`
  background: rgba(0, 0, 0, 0.03);
  font-size: 14px;
  padding: 5px;
  border-bottom: ${props => props.theme.boxBorder};
`;

const Item = styled.li`
  padding: 5px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  width: 240px;

  ${props => props.theme.media.tablet} {
    width: 100px;
  }
`;

interface Props {
  searchKeyword: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
}

const SearchResult: FC<Props> = ({
  searchKeyword,
  setSearch,
  setSearchKeyword
}) => {
  const { data, loading } = useQuery(keywordQuery, {
    variables: {
      searchKeyword
    },
    notifyOnNetworkStatusChange: true
  });

  const handleClickItem = useCallback(keyword => {
    Router.push(`/search?keyword=${keyword}`);
    setSearch(keyword);
    setSearchKeyword("");
  }, []);

  if (loading || data.getSearchKeyword.length === 0) {
    return <Fragment />;
  }

  return (
    <Container>
      <ContentType>연관 검색어</ContentType>
      <ol>
        {data.getSearchKeyword.map(({ id, keyword }) => (
          <Item key={id} onClick={() => handleClickItem(keyword)}>
            {keyword}
          </Item>
        ))}
      </ol>
    </Container>
  );
};

export default memo(SearchResult);
