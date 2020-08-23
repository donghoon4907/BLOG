import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { meQuery } from "../graphql/auth/query/me";
import { useVssDispatch, SET_ME } from "../context";
import Layout from "../components/common/Layout";
import Section from "../components/common/Section";
import SearchBar from "../components/search/SearchBar";

const Search: NextPage = () => {
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
      </Section>
    </Layout>
  );
};

export default Search;
