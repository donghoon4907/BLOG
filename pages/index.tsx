import React from "react";
import { NextPage, GetStaticProps } from "next";
import { useQuery } from "@apollo/client";
import Layout from "../components/common/Layout";
import Feed from "../components/feed/FeedContainer";
import { initializeApollo } from "../lib/apollo";
import { GET_FEED } from "../graphql/page/query/feed";
import { GET_RECOMAND_USERS } from "../graphql/user/query";
import { ME } from "../graphql/auth/query/me";
import { useLocalDispatch } from "../context";
import { SET_ME } from "../context/action";

/**
 * 메인 화면 컴포넌트
 *
 * @Nextpage
 * @author frist
 */
const Index: NextPage = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 사용자 정보 로드
   */
  useQuery(ME, {
    ssr: false,
    onCompleted: ({ me }) => {
      const { id, nickname, email, avatar, isMaster } = me;
      dispatch({
        type: SET_ME,
        id,
        nickname,
        email,
        avatar,
        isMaster
      });
    }
  });

  return (
    <Layout>
      <Feed />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_FEED,
    variables: {
      first: 30
    }
  });
  await apolloClient.query({
    query: GET_RECOMAND_USERS,
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
