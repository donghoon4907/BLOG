import React, { FC } from "react";
import Link from "next/link";
import { Search } from "../icon";

const SearchButton: FC = () => (
  <Link href="/search">
    <a>
      <Search />
    </a>
  </Link>
);

export default SearchButton;
