import React from "react";
import { NextPage, GetServerSideProps } from "next";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../lib/apollo";
import { searchQuery } from "../graphql/page/query/search";
import { meQuery } from "../graphql/auth/query/me";
import { useVssDispatch, SET_ME } from "../context";
import Layout from "../components/common/Layout";
import Section from "../components/common/Section";
import SearchUser from "../components/search/SearchUserContainer";
import SearchPost from "../components/search/SearchPostContainer";

const Search: NextPage = () => {
  const dispatch = useVssDispatch();
  useQuery(meQuery, {
    ssr: false,
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
    <Layout title="검색결과">
      <Section>
        <SearchUser />
        <SearchPost />
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { keyword, orderBy = "createdAt_DESC" } = query;
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: searchQuery,
    variables: {
      first: 10,
      keyword,
      orderBy
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
};

export default Search;
