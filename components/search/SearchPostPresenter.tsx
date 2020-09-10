import React, { FC } from "react";
import PostContainer from "../post/PostContainer";
import NoData from "../common/NoData";
import Subject from "../common/Subject";
import Loader from "../common/Loader";
import SearchFilter from "./SearchFilter";
import SearchTag from "./SearchTag";
import { Filter } from "../icon";

interface Props {
  /**
   * * Loading during search post
   */
  loading: boolean;
  /**
   * * Post[]
   */
  posts: any;
  /**
   * * Search keyword
   */
  keyword: string;
  /**
   * * Whether the search filter bar is exposed
   */
  isShowFilterBar: boolean;
  /**
   * * Handler for click search filter
   */
  onClickFilter: any;
}

/**
 * Component for search post
 *
 * @Presenter
 * @author frisk
 */
const SearchPostPresenter: FC<Props> = ({
  loading,
  posts,
  keyword,
  isShowFilterBar,
  onClickFilter
}) => (
  <>
    <Subject>
      <h1>"{keyword}" 검색결과</h1>
      <div onClick={onClickFilter}>
        <Filter style={{ width: 30, height: 30 }} />
      </div>
    </Subject>
    {isShowFilterBar && <SearchFilter />}
    <SearchTag />
    {loading && <Loader />}
    {posts.length > 0 ? (
      posts.map(post => <PostContainer key={post.id} {...post} />)
    ) : (
      <NoData>검색 결과가 없습니다.</NoData>
    )}
  </>
);

export default SearchPostPresenter;
