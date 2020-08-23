import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { meQuery } from "../graphql/auth/query/me";
import { useVssDispatch, SET_ME } from "../context";
import Layout from "../components/common/Layout";
import Section from "../components/common/Section";
import SearchPost from "../components/search/SearchPostContainer";
import Subject from "../components/common/Subject";
import SearchBar from "../components/search/SearchBar";
import SearchTag from "../components/search/SearchTag";

const Search: NextPage = () => {
  const router = useRouter();
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
        <Subject>"{router.query.keyword}"의 검색결과</Subject>
        <SearchPost />
      </Section>
    </Layout>
  );
};

export default Search;
