import React, { useState, useCallback, ChangeEvent, useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { initializeApollo } from "../../lib/apollo";
import { GET_CATEGORIES, GET_POSTS } from "../../graphql/post/query";
import { GET_USERS, GET_USER } from "../../graphql/user/query";
import { GET_NOTICES } from "../../graphql/notice/query";
import { ME } from "../../graphql/auth/query/me";
import { useLocalDispatch } from "../../context";
import { SET_ME } from "../../context/action";
import Layout from "../../components/common/Layout";
import Avatar from "../../components/common/Avatar";
import Subject from "../../components/common/Subject";
import { UserProps } from "../../interfaces";
import Loader from "../../components/common/Loader";
import { Select } from "../../components/common/Form";
import PostItem from "../../components/post/PostItem";

const Container = styled.div`
  padding: 3rem;
`;

const InfoWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > * {
    margin-right: 10px;
  }
`;

const UserMetaWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

interface Props {
  user: UserProps;
}

/**
 * 사용자 상세 화면 컴포넌트
 *
 * @Nextpage
 * @author frist
 */
const UserDetail: NextPage<Props> = ({ user }) => {
  const { id, nickname, avatar, postCount } = user;
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const [orderBy, setOrderBy] = useState<string>("createdAt_DESC");
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
   * 사용자 게시물 로드
   */
  const { data, loading, fetchMore } = useQuery(GET_POSTS, {
    variables: {
      first: 30,
      userId: id,
      orderBy
    },
    notifyOnNetworkStatusChange: true
  }) as any;
  /**
   * 정렬 변경 핸들러
   */
  const handleChangeOrderBy = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setOrderBy(e.target.value);
    },
    []
  );
  /**
   * 스크롤 이벤트 핸들러
   */
  const handleScrollFetchMore = () => {
    /**
     * 요청 중인 경우
     */
    if (loading) {
      return;
    }

    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    if (data.posts.data) {
      if (scrollTop + clientHeight === scrollHeight) {
        if (data.posts.data.length > 0 && data.posts.data.length % 30 === 0) {
          /**
           * 추가 게시물 요청
           */
          fetchMore({
            variables: {
              skip: data.posts.data.length,
              first: 30,
              orderBy: "createdAt_DESC"
            },
            updateQuery: (prev: any, next: any) => {
              const { fetchMoreResult } = next;

              if (fetchMoreResult) {
                if (fetchMoreResult.posts.data.length === 0) {
                  window.removeEventListener("scroll", handleScrollFetchMore);
                }

                return {
                  posts: {
                    data: [...prev.posts.data, ...fetchMoreResult.posts.data],
                    total: data.posts.total
                  }
                };
              } else {
                return prev;
              }
            }
          });
        }
      }
    }
  };
  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    /**
     * 스크롤 이벤트 바인딩
     */
    window.addEventListener("scroll", handleScrollFetchMore);
    /**
     * 스크롤 이벤트 언바인딩
     */
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [data && data.posts.data, loading]);

  return (
    <Layout title={nickname}>
      <Container>
        {loading && <Loader />}
        <InfoWrapper>
          <Avatar src={avatar.url} size="200" userId={id} />
          <UserMetaWrapper>
            <h1>{nickname}</h1>
            <h3>
              <em>{postCount} posts</em>
            </h3>
          </UserMetaWrapper>
        </InfoWrapper>
        <hr />
        <Subject>
          <h3>게시물 목록</h3>
          <div>
            <Select value={orderBy} onChange={handleChangeOrderBy}>
              <option value="createdAt_DESC">등록일 순</option>
              <option value="createdAt_ASC">등록일 역순</option>
              <option value="viewCount_DESC">조회수 순</option>
              <option value="viewCount_ASC">조회수 역순</option>
              <option value="likeCount_DESC">좋아요 순</option>
              <option value="likeCount_ASC">좋아요 역순</option>
              <option value="commentCount_DESC">댓글수 순</option>
              <option value="commentCount_ASC">댓글수 역순</option>
            </Select>
          </div>
        </Subject>
        {data &&
          data.posts.data.map(post => <PostItem key={post.id} {...post} />)}
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { query, res } = context;
  /**
   * 아폴로 클라이언트 활성화
   */
  const apolloClient = initializeApollo();
  try {
    /**
     * 아이디가 없는 경우 redirect
     */
    if (!query.id) {
      throw new Error();
    }
    /**
     * 사용자 상세 로드 및 캐시에 저장합니다.
     */
    const { data } = await apolloClient.query({
      query: GET_USER,
      variables: {
        id: query.id
      }
    });
    /**
     * 사용자의 게시물 로드 및 캐시에 저장합니다.
     */
    await apolloClient.query({
      query: GET_POSTS,
      variables: {
        first: 30,
        userId: query.id,
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
        user: data.user,
        initialApolloState: apolloClient.cache.extract()
      }
    };
  } catch {
    /**
     * 요청 오류 시 페이지 전환
     */
    res.statusCode = 302;
    res.setHeader("Location", `/404`);
    return { props: {} };
  }
};

export default UserDetail;
