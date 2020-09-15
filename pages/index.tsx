import React from "react";
import { NextPage, GetServerSideProps } from "next";
import { useQuery } from "@apollo/client";
import Layout from "../components/common/Layout";
import Subject from "../components/common/Subject";
import PostList from "../components/post/FeedPostList";
import { initializeApollo } from "../lib/apollo";
import { GET_POSTS, GET_CATEGORIES } from "../graphql/post/query";
import { GET_USERS } from "../graphql/user/query";
import { GET_NOTICES } from "../graphql/notice/query";
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
    <Layout title="피드">
      <Subject>최근 게시물</Subject>
      <PostList />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res } = ctx;
  /**
   * 아폴로 클라이언트 활성화
   */
  const apolloClient = initializeApollo();
  try {
    /**
     * 최근 게시물을 로드 및 캐시에 저장합니다.
     */
    await apolloClient.query({
      query: GET_POSTS,
      variables: {
        first: 30,
        orderBy: "createdAt_DESC"
      }
    });
    /**
     * 추천 블로그를 로드 및 캐시에 저장합니다.
     */
    await apolloClient.query({
      query: GET_USERS,
      variables: {
        first: 10,
        orderBy: "postCount_DESC"
      }
    });
    /**
     * 추천 카테고리 로드 및 캐시에 저장합니다.
     */
    await apolloClient.query({
      query: GET_CATEGORIES,
      variables: {
        first: 3,
        orderBy: "useCount_DESC"
      }
    });
    /**
     * 최근 공지사항 로드 및 캐시에 저장합니다.
     */
    await apolloClient.query({
      query: GET_NOTICES,
      variables: {
        first: 1,
        orderBy: "createdAt_DESC"
      }
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract()
      }
    };
  } catch {
    /**
     * 요청 오류 시 페이지 전환
     */
    res.statusCode = 302;
    res.setHeader("Location", `/404`);

    return {
      props: {}
    };
  }
};

export default Index;
