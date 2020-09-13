import { useRouter } from "next/router";
import React, { useState, useCallback, useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useQuery, useMutation } from "@apollo/client";
import styled from "styled-components";
import { initializeApollo } from "../../lib/apollo";
import { GET_CATEGORIES, GET_POST } from "../../graphql/post/query";
import { GET_COMMENTS } from "../../graphql/comment/query";
import { GET_USERS } from "../../graphql/user/query";
import { GET_NOTICES } from "../../graphql/notice/query";
import { ME } from "../../graphql/auth/query/me";
import { LIKE_POST } from "../../graphql/post/mutation/like";
import { DELETE_POST } from "../../graphql/post/mutation/delete";
import { useLocalDispatch, useLocalState } from "../../context";
import { SET_ME, SHOW_LOGIN_MODAL } from "../../context/action";
import Layout from "../../components/common/Layout";
import Avatar from "../../components/common/Avatar";
import { PostProps } from "../../interfaces";
import moment from "moment";
import { HeartEmpty, HeartFull, Trash, Modify } from "../../components/icon";
import { getAccessToken } from "../../lib/token";
import CommentList from "../../components/comment/CommentList";
import Loader from "../../components/common/Loader";

const Container = styled.div`
  padding: 3rem;

  & .tui-editor-contents pre {
    ${props => props.theme.whiteBox};
  }
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

const SubmitWrapper = styled.div`
  ${props => props.theme.whiteBox};
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  top: 10rem;
  right: 20px;
  width: 3rem;
  z-index: 2;
  background: #efeff1;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border: ${props => props.theme.boxBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: white;
  cursor: pointer;

  & + & {
    margin-top: 5px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

interface Props {
  post: PostProps;
}

/**
 * 게시물 상세 화면 컴포넌트
 *
 * @Nextpage
 * @author frist
 */
const PostDetail: NextPage<Props> = ({ post }) => {
  const { id, title, content, user, createdAt, likes } = post;
  /**
   * 라우터 모듈 활성화
   */
  const router = useRouter();
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const { id: userId } = useLocalState();
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
   * 좋아요 mutation 활성화
   */
  const [like] = useMutation(LIKE_POST);
  /**
   * 게시물 삭제 mutation 활성화
   */
  const [del, { loading: deleteLoading }] = useMutation(DELETE_POST);
  /**
   * 내가 좋아요 했는지 여부
   */
  const isLikePost = likes.some(like => like.user.id === userId);
  /**
   * 내가 작성했는지 여부
   */
  const isMyPost = userId ? userId === user.id : false;
  /**
   * 좋아요 여부 상태 관리 모듈 활성화
   */
  const [isLike, setIsLike] = useState<boolean>(isLikePost);
  /**
   * 좋아요 핸들러
   */
  const handleLike = useCallback(async () => {
    /**
     * 토큰
     */
    const token = getAccessToken();

    if (token) {
      /**
       * 좋아요 여부 상태 변경
       */
      setIsLike(!isLike);

      try {
        await like({
          variables: { id }
        });
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    } else {
      /**
       * 로그인 팝업 보이기
       */
      dispatch({
        type: SHOW_LOGIN_MODAL
      });
    }
  }, [isLike]);
  /**
   * 게시물 삭제 핸들러
   */
  const handleDelete = useCallback(async () => {
    /**
     * 삭제 요청 중인 경우
     */
    if (deleteLoading) {
      return alert("요청중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("포스트를 삭제하시겠어요?");

    if (tf) {
      try {
        const {
          data: { deletePost }
        } = await del({
          variables: { id }
        });

        if (deletePost) {
          alert("포스트가 삭제되었습니다.");
          /**
           * 피드 페이지로 이동
           */
          router.push("/");
        }
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    }
  }, [deleteLoading]);
  /**
   * 게시물 수정 핸들러
   */
  const handleUpdate = useCallback(() => {
    const tf = confirm("게시물을 수정하러 가시겠어요?");
    if (tf) {
      router.push(`/update/${id}`);
    }
  }, []);

  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    /**
     * 스크롤 이벤트 바인딩
     */
    setIsLike(isLikePost);
  }, [isLikePost]);

  return (
    <Layout title={title}>
      {deleteLoading && <Loader />}
      <Container>
        <h1>{title}</h1>
        <InfoWrapper>
          <Avatar src={user.avatar.url} size="30" userId={user.id} />
          <span>{user.nickname}</span>
          <span>·</span>
          <time>{moment(createdAt).format("YYYY년 MM월 DD일 HH시 mm분")}</time>
        </InfoWrapper>
        <SubmitWrapper>
          <IconWrapper onClick={handleLike}>
            {isLike ? <HeartFull /> : <HeartEmpty />}
          </IconWrapper>
          {isMyPost && (
            <>
              <IconWrapper onClick={handleUpdate}>
                <Modify />
              </IconWrapper>
              <IconWrapper onClick={handleDelete}>
                <Trash />
              </IconWrapper>
            </>
          )}
        </SubmitWrapper>
        <div className="tui-editor-contents">
          <div dangerouslySetInnerHTML={{ __html: content as string }} />
        </div>
        <CommentList />
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
     * 게시물 상세 로드 및 캐시에 저장합니다.
     */
    const { data } = await apolloClient.query({
      query: GET_POST,
      variables: {
        id: query.id
      }
    });
    /**
     * 게시물 댓글 로드 및 캐시에 저장합니다.
     */
    await apolloClient.query({
      query: GET_COMMENTS,
      variables: {
        first: 30,
        postId: query.id
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
    return { props: {} };
  }
};

export default PostDetail;
