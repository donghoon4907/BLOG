import React, { useState, useCallback } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useQuery, useMutation } from "@apollo/client";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import { initializeApollo } from "../../lib/apollo";
import { UPDATE_POST } from "../../graphql/post/mutation/update";
import { GET_CATEGORIES, GET_POST } from "../../graphql/post/query";
import { GET_USERS } from "../../graphql/user/query";
import { GET_NOTICES } from "../../graphql/notice/query";
import { ME } from "../../graphql/auth/query/me";
import { useLocalDispatch } from "../../context";
import { SET_ME, SHOW_LOGIN_MODAL } from "../../context/action";
import Editor from "../../components/post/Editor";
import { InputWrapper, Label } from "../../components/common/Form";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useInput } from "../../hooks";
import Loader from "../../components/common/Loader";
import { PostProps } from "../../interfaces";
import { getAccessToken } from "../../lib/token";

const Container = styled.div`
  & input {
    background: white;
  }
`;

const CategoryWrapper = styled.div`
  height: auto;
  min-height: 50px;
  display: flex;
  justify-content: flex-start;
  padding-top: 2rem;
`;

const SubmitWrapper = styled.div`
  margin-top: 1rem;
`;

interface Props {
  post: PostProps;
}

/**
 * 게시물 수정 화면 컴포넌트
 *
 * @Nextpage
 * @author frist
 */
const Update: NextPage<Props> = ({ post }) => {
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
   * 게시물 수정 mutation 활성화
   */
  const [upd, { loading }] = useMutation(UPDATE_POST);
  /**
   * 제목 입력을 위한 useInput 활성화
   */
  const title = useInput(post.title);
  /**
   * 소개 입력을 위한 useInput 활성화
   */
  const description = useInput(post.description);
  /**
   * 카테고리 입력을 위한 useInput 활성화
   */
  const category = useInput(post.category, "no_space");
  /**
   * 내용 상태 관리 모듈 활성화
   */
  const [content, setContent] = useState<string>(post.content);
  /**
   * 등록 핸들러
   */
  const handleSubmit = useCallback(async () => {
    /**
     * 토큰
     */
    const token = getAccessToken();

    if (token) {
      /**
       * 등록 요청 중인 경우
       */
      if (loading) {
        return alert("요청 중입니다");
      }
      if (!title.value) {
        return alert("제목을 입력하세요.");
      }
      if (title.value.length > 50) {
        return alert("제목은 50자 미만으로 입력하세요.");
      }
      if (description.value.length > 200) {
        return alert("소개는 200자 미만으로 입력하세요.");
      }
      if (category.value.length > 10) {
        return alert("카테고리는 10자 미만으로 입력하세요.");
      }

      const tf = confirm("입력한 내용으로 게시물을 수정하시겠어요?");

      if (tf) {
        const {
          data: { updatePost }
        } = await upd({
          variables: {
            id: post.id,
            title: title.value,
            description: description.value,
            content,
            category: category.value
          }
        });
        if (updatePost) {
          alert("게시물이 수정되었습니다.");
        }
      }
    } else {
      /**
       * 로그인 팝업 보이기
       */
      dispatch({
        type: SHOW_LOGIN_MODAL
      });
    }
  }, [title.value, description.value, category.value, content]);

  return (
    <Layout title="게시물 수정">
      {loading && <Loader />}
      <Container>
        <CategoryWrapper>
          <InputWrapper>
            <Label htmlFor="category" val={category.value}>
              카테고리
            </Label>
            <Input
              type="text"
              placeholder="카테고리를 입력하세요"
              name="category"
              autoComplete="off"
              required
              {...category}
            />
          </InputWrapper>
        </CategoryWrapper>
        <InputWrapper>
          <Label htmlFor="title" val={title.value}>
            제목
          </Label>
          <Input
            type="text"
            placeholder="제목을 입력하세요"
            name="title"
            autoComplete="off"
            required
            {...title}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="description" val={description.value}>
            소개
          </Label>
          <Input
            type="text"
            placeholder="간단한 소개를 입력하세요."
            name="description"
            autoComplete="off"
            required
            {...description}
          />
        </InputWrapper>
        <Editor
          onChange={(content) => setContent(content)}
          initialValue={post.content}
          initialEditType="markdown"
        />
        <SubmitWrapper>
          <Button onClick={handleSubmit}>수정</Button>
        </SubmitWrapper>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res, query } = ctx;
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
     * 게시물 로드 및 캐시에 저장합니다.
     */
    const { data } = await apolloClient.query({
      query: GET_POST,
      variables: {
        id: query.id
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
        post: data.post,
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

export default Update;
