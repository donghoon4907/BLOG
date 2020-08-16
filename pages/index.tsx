import React, { FC, useEffect, useState, Fragment } from "react";
import Layout from "../components/common/Layout";
import Feed from "../components/feed/FeedContainer";
import isAuthenticated from "../lib/isAuthenticated";

const Index: FC = () => {
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
      <Feed />
    </Layout>
  );
};

export default Index;
