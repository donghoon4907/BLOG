import React, { FC } from "react";
import styled from "styled-components";
import PostItem from "../post/PostItem";
import NoData from "../common/NoData";
import Subject from "../common/Subject";
import Loader from "../common/Loader";
import SearchFilter from "./SearchFilter";
import SearchTag from "./SearchTag";
import { Filter } from "../icon";
import { PostProps } from "../../interfaces";

const Container = styled.div`
  padding: 1rem;
`;

interface Props {
  loading: boolean;
  posts: PostProps[];
  keyword: string;
  total: number;
  isShowFilterBar: boolean;
  onClickFilter: () => void;
}

/**
 * * 게시물 검색 프레젠터 컴포넌트
 *
 * @Presenter
 * @author frisk
 * @param props.loading 검색 요청 중 여부
 * @param props.posts 게시물 목록
 * @param props.keyword 검색어
 * @param props.total 검색 결과 합계
 * @param props.isShowFilterBar 필터 보이기 여부
 * @param props.onClickFilter 필터 클릭 핸들러
 */
const SearchPostPresenter: FC<Props> = ({
  loading,
  posts,
  keyword,
  total,
  isShowFilterBar,
  onClickFilter
}) => (
  <Container>
    <Subject>
      <h1>{`"${keyword}" 검색결과 ${total}건`}</h1>
      <div onClick={onClickFilter}>
        <Filter style={{ width: 30, height: 30 }} />
      </div>
    </Subject>
    {isShowFilterBar && <SearchFilter />}
    <SearchTag />
    {loading && <Loader />}
    {posts.length > 0 ? (
      posts.map(post => <PostItem key={post.id} {...post} />)
    ) : (
      <NoData>검색 결과가 없습니다.</NoData>
    )}
  </Container>
);

export default SearchPostPresenter;
