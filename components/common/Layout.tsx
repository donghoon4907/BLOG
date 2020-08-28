import Head from "next/head";
import React, { FC } from "react";
import Header from "./Header";
import SetNoticeModal from "../modal/SetNoticeContainer";
import SetPostModal from "../modal/SetPostContainer";
import AuthModal from "../modal/Auth";
import { useVssState } from "../../context";

interface Props {
  title?: string;
}

const Layout: FC<Props> = ({ children, title = "VSS" }) => {
  const {
    isShowNoticeModal,
    isShowAddPostModal,
    isShowLoginModal
  } = useVssState();
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
      <>{title !== "페이지를 찾을 수 없습니다" && <Header />}</>
      <>{children}</>
      <>
        {isShowNoticeModal && <SetNoticeModal />}
        {isShowAddPostModal && <SetPostModal />}
        {isShowLoginModal && <AuthModal />}
      </>
    </div>
  );
};

export default Layout;
