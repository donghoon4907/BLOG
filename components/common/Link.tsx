import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.a`
  color: black;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

type Props = {
  href: string;
  children: any;
};

const StyledLink: FC<Props> = ({ href, children }) => (
  <div>
    <Link href={href}>
      <Container>{children}</Container>
    </Link>
  </div>
);

export default StyledLink;
