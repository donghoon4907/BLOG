import React, { FC, useCallback } from "react";
import { useLocalDispatch, useLocalState } from "../../context";
import { SHOW_SEARCH_BAR, HIDE_SEARCH_BAR } from "../../context/action";
import { Search } from "../icon";

/**
 * * 검색 아이콘 컴포넌트
 *
 * @Component
 * @author frisk
 */
const SearchButton: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const { isShowSearchBar } = useLocalState();
  /**
   * 클릭 핸들러
   */
  const handleClick = useCallback(() => {
    /**
     * 검색바 보이기 / 숨기기
     */
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
