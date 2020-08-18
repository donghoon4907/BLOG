import React, { FC, useEffect } from "react";
import { GetStaticProps } from "next";
import Layout from "../components/common/Layout";
import Feed from "../components/feed/FeedContainer";
import isAuthenticated from "../lib/isAuthenticated";
import { initializeApollo } from "../lib/apollo";
import { postsQuery } from "../graphql/post/query";
import { noticesQuery } from "../graphql/notice/query";
import { feedQuery } from "../graphql/page/query/feed";

const Index: FC = () => {
  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <Layout>
      <Feed />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: feedQuery,
    variables: {
      first: 10
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
};

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: feedQuery,
//     variables: {
//       first: 10
//     }
//   });

//   await apolloClient.query({
//     query: noticesQuery,
//     variables: {
//       first: 10
//     }
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract()
//     },
//     revalidate: 1
//   };
// }

export default Index;
