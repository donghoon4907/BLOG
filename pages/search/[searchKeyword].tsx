import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { meQuery } from "../../graphql/auth/query/me";
import { useVssDispatch, SET_ME, SEARCH_POST } from "../../context";
import Layout from "../../components/common/Layout";
import Section from "../../components/common/Section";
import SearchPost from "../../components/search/SearchPostContainer";

const SearchKeyword: NextPage = () => {
  const router = useRouter();
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

  useEffect(() => {
    dispatch({
      type: SEARCH_POST,
      searchKeyword: router.query.searchKeyword as string
    });
  }, [router.query]);

  return (
    <Layout title="검색결과">
      <Section>
        <SearchPost />
      </Section>
    </Layout>
  );
};

export default SearchKeyword;
