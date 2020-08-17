import React, { useEffect, useState, Fragment, FC } from "react";
import Layout from "../components/common/Layout";
import isAuthenticated from "../lib/isAuthenticated";
import SearchPost from "../components/search/SearchPostContainer";

const Search: FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    isAuthenticated();
    setLoading(false);
  }, []);

  if (loading) {
    return <Fragment />;
  }

  return (
    <Layout>
      <SearchPost />
    </Layout>
  );
};

export default Search;
