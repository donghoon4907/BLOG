import Head from "next/head";
import React, { FC, useEffect, useCallback } from "react";
import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import AuthModal from "../modal/Auth";
import SetNoticeModal from "../modal/SetNoticeContainer";
import { useLocalDispatch, useLocalState } from "../../context";
import { CONTRACT_NAVIGATION } from "../../context/action";
import { setCollapse } from "../../lib/collapse";

const Section = styled.section`
  display: flex;
  justify-content: flex-start;
`;

interface Props {
  title?: string;
  description?: string;
  url?: string;
}

/**
 * 공통 레이아웃 컴포넌트
 *
 * @Component
 * @author frisk
 * @param props.title 페이지 제목
 * @param props.description 페이지 내용
 * @param props.url 페이지 주소
 */
const Layout: FC<Props> = ({
  children,
  title = "Frisklog",
  description = "Frisklog에 오신 것을 환영합니다.",
  url = "https://frisklog.vercel.app/"
}) => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const {
    isShowLoginModal,
    isShowNoticeModal,
    isCollapseNav
  } = useLocalState();
  /**
   * 리사이징 핸들러
   */
  const handleResize = useCallback(
    (e) => {
      const { innerWidth } = e.target;
      /**
       * 네비게이션이 축소된 경우
       */
      if (isCollapseNav === "contract") {
        return;
      }

      if (innerWidth <= 922) {
        /**
         * 네비게이션 축소
         */
        setCollapse("contract");
        dispatch({
          type: CONTRACT_NAVIGATION
        });
      }
    },
    [isCollapseNav]
  );
  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    /**
     * 브라우저 크기 변경 이벤트 바인딩
     */
    window.addEventListener("resize", handleResize);
    /**
     * 브라우저 크기 변경 이벤트 언바인딩
     */
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" name="format-detection" content="telephone=no" />
        {/** 전화번호 링크 제거 */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/** 호환성 보기 버튼 활성화 */}
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, user-scalable=yes, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta name="description" content={description} />
        <meta name="og:url" content={url} />
        <meta name="og:type" content="blog" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-178659482-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-178659482-1');
            `
          }}
        />
        <title>{title}</title>
      </Head>
      <div>
        {title === "페이지를 찾을 수 없습니다" ? (
          children
        ) : (
          <>
            <Header />
            <Section>
              <Nav />
              <Main>{children}</Main>
            </Section>
          </>
        )}
      </div>

      {isShowLoginModal && <AuthModal />}
      {isShowNoticeModal && <SetNoticeModal />}
    </div>
  );
};

export default Layout;
