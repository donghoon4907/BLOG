import Head from "next/head";
import React, { FC } from "react";
import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import SetNoticeModal from "../modal/SetNoticeContainer";
import SetPostModal from "../modal/SetPostContainer";
import AuthModal from "../modal/Auth";
import { useLocalState } from "../../context";

const Container = styled.main`
  display: flex;
  justify-content: flex-start;
`;

interface Props {
  /**
   * * Head title
   */
  title?: string;
}

/**
 * 공통 레이아웃 컴포넌트
 *
 * @Component
 * @author frisk
 * @param props.title Head title
 */
const Layout: FC<Props> = ({ children, title = "Frisk" }) => {
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const {
    isShowNoticeModal,
    isShowAddPostModal,
    isShowLoginModal
  } = useLocalState();
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, user-scalable=no"
        />
        <meta name="description" content="Video sharing system" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Header />
      <Container>
        <Nav />
        {children}
      </Container>
      <>
        {/* {isShowNoticeModal && <SetNoticeModal />}
        {isShowAddPostModal && <SetPostModal />} */}
        {isShowLoginModal && <AuthModal />}
      </>
    </div>
  );
};

export default Layout;
