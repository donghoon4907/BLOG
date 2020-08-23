import React, { FC } from "react";
import PostContainer from "../post/PostContainer";
import NoData from "../common/NoData";
import Subject from "../common/Subject";
import Loader from "../common/Loader";

type Props = {
  loading: boolean;
  loadingMorePosts: boolean;
  posts: any;
  keyword: string;
};

const SearchPostPresenter: FC<Props> = ({
  loading,
  loadingMorePosts,
  posts,
  keyword
}) => (
  <>
    <Subject>"{keyword}" 검색결과</Subject>
    {loading && loadingMorePosts && <Loader />}
    {posts.length > 0 ? (
      posts.map(post => <PostContainer key={post.id} {...post} />)
    ) : (
      <NoData>검색 결과가 없습니다.</NoData>
    )}
  </>
);

export default SearchPostPresenter;
