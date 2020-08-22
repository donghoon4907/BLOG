import React, { FC, useState, useCallback } from "react";
import { Search, MinimizeSearch } from "../icon";
import {
  useVssDispatch,
  SHOW_SEARCH_BAR,
  HIDE_SEARCH_BAR
} from "../../context";

const SearchButton: FC = () => {
  const dispatch = useVssDispatch();
  const [active, setActive] = useState(false);

  const handleClick = useCallback(() => {
    if (active) {
      setActive(false);
      dispatch({
        type: HIDE_SEARCH_BAR
      });
    } else {
      setActive(true);
      dispatch({
        type: SHOW_SEARCH_BAR
      });
    }
  }, [active]);

  return (
    <div onClick={handleClick}>{active ? <MinimizeSearch /> : <Search />}</div>
  );
};

export default SearchButton;
