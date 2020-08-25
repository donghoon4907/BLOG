import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apollo";
import { meQuery, MeData, Me } from "../../graphql/auth/query/me";
import { postsQuery } from "../../graphql/post/query";
import { useVssDispatch, SET_ME, SEARCH_POST } from "../../context";
import Layout from "../../components/common/Layout";
import Section from "../../components/common/Section";
import SearchPost from "../../components/search/SearchPostContainer";

const Keyword: NextPage = () => {
  const router = useRouter();
  const dispatch = useVssDispatch();
  useQuery<MeData, Me>(meQuery, {
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
  useEffect(() => {
    dispatch({
      type: SEARCH_POST,
      searchKeyword: router.query.searchKeyword as string
    });
  }, []);
  return (
    <Layout title="검색결과">
      <Section>
        <SearchPost />
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { searchKeyword }
}) => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: postsQuery,
    variables: {
      first: 10,
      searchKeyword
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
};

export default Keyword;
