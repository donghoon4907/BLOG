import React, { useState, useEffect, useCallback, FC } from "react";
import { useApolloClient } from "@apollo/client";
import { useLocalState, useLocalDispatch } from "../../context";
import { SHOW_FILTER_BAR, HIDE_FILTER_BAR } from "../../context/action";
import SearchPostPresenter from "./SearchPostPresenter";
import { GET_POSTS } from "../../graphql/post/query";
import { PostProps } from "../../interfaces";

/**
 * * 게시물 검색 컨테이너 컴포넌트
 *
 * @Container
 * @author frisk
 */
const SearchPostContainer: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const {
    searchPostOption: { query, orderBy },
    isShowFilterBar
  } = useLocalState();

  /**
   * 아폴로 클라이언트 활성화
   */
  const client = useApolloClient();
  /**
   * 검색 요청 여부 상태 관리 모듈 활성화
   */
  const [loading, setLoading] = useState<boolean>(false);
  /**
   * 검색 결과 상태 관리 모듈 활성화
   */
  const [loadPost, setLoadPost] = useState<PostProps[]>([]);
  /**
   * 검색 결과 합계 상태 관리 모듈 활성화
   */
  const [total, setTotal] = useState<number>(0);
  /**
   * 검색 함수
   * @param isReset
   */
  const searchPost = useCallback(
    async isReset => {
      /**
       * 요청 중인 경우
       */
      if (loading) {
        return alert("요청 중입니다. 잠시만 기다려주세요.");
      }
      /**
       * 로딩 활성화
       */
      setLoading(true);
      /**
       * 새 게시물 조회
       */
      const {
        data: { posts }
      } = (await client.query({
        query: GET_POSTS,
        variables: {
          query,
          orderBy,
          first: 30,
          skip: isReset ? 0 : loadPost.length
        },
        fetchPolicy: "network-only"
      })) as any;
      if (posts) {
        const { data, total } = posts;
        /**
         * 로드된 게시물 저장
         */
        if (isReset) {
          setLoadPost(data);
        } else {
          setLoadPost(loadPost.concat(data));
        }
        setTotal(total);
      }
      /**
       * 로딩 비활성화
       */
      setLoading(false);
    },
    [loading, loadPost, query, orderBy]
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

    if (scrollTop + clientHeight === scrollHeight) {
      if (loadPost.length > 0 && loadPost.length % 30 === 0) {
        /**
         * 검색된 추가 데이터 로드
         */
        searchPost(false);
      }
    }
  };
  /**
   * 필터 클릭 핸들러
   */
  const handleClickFilter = useCallback(() => {
    /**
     * 필터 보이기 / 숨기기
     */
    dispatch({
      type: isShowFilterBar ? HIDE_FILTER_BAR : SHOW_FILTER_BAR
    });
  }, [isShowFilterBar]);
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
  }, [loadPost, loading]);
  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    if (query) {
      /**
       * 검색
       */
      searchPost(true);
    }
  }, [query, orderBy]);

  return (
    <SearchPostPresenter
      loading={loading}
      posts={loadPost}
      keyword={query}
      total={total}
      isShowFilterBar={isShowFilterBar}
      onClickFilter={handleClickFilter}
    />
  );
};

export default SearchPostContainer;
