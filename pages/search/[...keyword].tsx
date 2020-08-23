import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apollo";
import { meQuery } from "../../graphql/auth/query/me";
import { postsQuery } from "../../graphql/post/query";
import { useVssDispatch, SET_ME } from "../../context";
import Layout from "../../components/common/Layout";
import Section from "../../components/common/Section";
import SearchPost from "../../components/search/SearchPostContainer";
import SearchBar from "../../components/search/SearchBar";
import SearchTag from "../../components/search/SearchTag";

const Keyword: NextPage = () => {
  const dispatch = useVssDispatch();
  useQuery(meQuery, {
    onCompleted: ({ getMyProfile }) => {
      const { id, nickname, email, avatar, isMaster } = getMyProfile;
      dispatch({
        type: SET_ME,
        userId: id,
        nickname,
        email,
        avatar,
        isMaster
      });
    }
  });
  return (
    <Layout title="검색">
      <Section>
        <SearchBar />
        <SearchTag />
        <SearchPost />
      </Section>
    </Layout>
  );
};

Keyword.getInitialProps = async ({ query }) => {
  const variables = {
    first: 10
  };

  if (query.keyword && query.keyword.length > 0) {
    (query.keyword as any).forEach(v => {
      const splitQuery = v.split("=");
      variables[splitQuery[0]] = splitQuery[1];
    });
  }

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: postsQuery,
    variables
  });

  return {
    initialApolloState: apolloClient.cache.extract()
  };
};

export default Keyword;
