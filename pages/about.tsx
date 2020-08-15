import * as React from "react";
import Link from "next/link";
import Layout from "../components/common/Layout";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

Layout.getInitialProps = async ({ apolloClient, ...ctx }: MyContext) => {
  await ctx.apolloClient.query({
    query: gql`
      query allPosts($first: Int!, $skip: Int!) {
        allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
          id
          title
          votes
          url
          createdAt
        }
        _allPostsMeta {
          count
        }
      }
    `,
    variables: {
      skip: 0,
      first: 10
    }
  });

  return {};
};

export default AboutPage;
