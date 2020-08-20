import Head from "next/head";
import React, { FC } from "react";
import Header from "./Header";

type Props = {
  title?: string;
};

const Layout: FC<Props> = ({ children, title = "VSS" }) => (
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
      <title>{title}</title>
    </Head>

    {title !== "페이지를 찾을 수 없습니다" && <Header />}
    {children}
  </div>
);

export default Layout;
