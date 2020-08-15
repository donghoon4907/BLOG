import Link from "next/link";
import Router from "next/router";
import { NextFC } from "next";
import React, { useEffect } from "react";
import Layout from "../components/common/Layout";
import isAuthenticated from "../lib/isAuthenticated";

type Props = {
  isLoggedIn: boolean;
};

const Index: NextFC<Props> = ({ isLoggedIn }) => {
  useEffect(() => {
    if (!isLoggedIn) Router.push("/login");
  }, []);
  return (
    <Layout title="로그인">
      <h1>hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

Index.getInitialProps = async (context: any) => {
  const { data } = await isAuthenticated(context);
  if (data) {
    return {
      isLoggedIn: true
    };
  }
  return {
    isLoggedIn: false
  };
};

export default Index;
