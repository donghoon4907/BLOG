import React, { FC, useEffect } from "react";
import { GetStaticProps } from "next";
import { useQuery } from "@apollo/client";
import Layout from "../components/common/Layout";
import Feed from "../components/feed/FeedContainer";
import { initializeApollo } from "../lib/apollo";
import { feedQuery } from "../graphql/page/query/feed";
import { meQuery } from "../graphql/auth/query/me";
import { useVssDispatch, SET_ME } from "../context";

const Index: FC = () => {
  const dispatch = useVssDispatch();
  const { data } = useQuery(meQuery);

  useEffect(() => {
    if (data && data.getMyProfile) {
      const { id, nickname, email, avatar, isMaster } = data.getMyProfile;
      dispatch({
        type: SET_ME,
        id,
        nickname,
        email,
        avatar,
        isMaster
      });
    }
  }, [data && data.getMyProfile]);

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

export default Index;
