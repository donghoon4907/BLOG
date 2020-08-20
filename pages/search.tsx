import React, { FC } from "react";
import Layout from "../components/common/Layout";
import SearchPost from "../components/search/SearchPostContainer";

const Search: FC = () => {
  return (
    <Layout>
      <SearchPost />
    </Layout>
  );
};

export default Search;
