import React, { FC, useCallback } from "react";
import {
  useVssDispatch,
  useVssState,
  SHOW_SEARCH_BAR,
  HIDE_SEARCH_BAR
} from "../../context";
import { Search } from "../icon";

const SearchButton: FC = () => {
  const dispatch = useVssDispatch();
  const { isShowSearchBar } = useVssState();

  const handleClick = useCallback(() => {
    dispatch({
      type: isShowSearchBar ? HIDE_SEARCH_BAR : SHOW_SEARCH_BAR
    });
  }, [isShowSearchBar]);

  return (
    <div onClick={handleClick}>
      <Search />
    </div>
  );
};

export default SearchButton;
