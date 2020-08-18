import React, { FC, useState, useCallback } from "react";
import { Search, MinimizeSearch } from "../icon";
import { useVssDispatch, SET_SEARCH_BAR } from "../../context";

const SearchButton: FC = () => {
  const dispatch = useVssDispatch();
  const [active, setActive] = useState(false);

  const handleClick = useCallback(() => {
    setActive(!active);
    dispatch({
      type: SET_SEARCH_BAR,
      payload: !active
    });
  }, [active]);

  return (
    <div onClick={handleClick}>{active ? <MinimizeSearch /> : <Search />}</div>
  );
};

export default SearchButton;
