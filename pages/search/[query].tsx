import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apollo";
import { ME } from "../../graphql/auth/query/me";
import { GET_CATEGORIES } from "../../graphql/post/query";
import { GET_USERS } from "../../graphql/user/query";
import { GET_NOTICES } from "../../graphql/notice/query";
import { useLocalDispatch } from "../../context";
import { SET_ME, SEARCH_POST } from "../../context/action";
import Layout from "../../components/common/Layout";
import SearchPost from "../../components/search/SearchPostContainer";

/**
 * 게시물 검색 컴포넌트
 *
 * @Nextpage
 * @author frist
 */
const SearchKeyword: NextPage = () => {
  /**
   * 라우터 모듈 활성화
   */
  const router = useRouter();
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
  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    dispatch({
      type: SEARCH_POST,
      query: router.query.query as string
    });
  }, [router.query]);

  return (
    <Layout title="검색결과">
      <SearchPost />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { res } = ctx;
  /**
   * 아폴로 클라이언트 활성화
   */
  const apolloClient = initializeApollo();
  try {
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

export default SearchKeyword;
