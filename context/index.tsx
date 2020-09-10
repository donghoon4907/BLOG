import React, { useReducer, useContext, createContext, Dispatch } from "react";
import reducer from "./reducer";
import { Action } from "./action";
import { Avatar } from "../interfaces";

/**
 * * 선택된 게시물 타입
 *
 * @author frisk
 * @property {string} id - 게시물 ID
 * @property {string} title - 제목
 * @property {string} description - 내용
 * @deprecated
 */
type ActivePost = {
  id: string;
  title: string;
  description: string;
};

/**
 * * 선택된 공지사항 타입
 *
 * @author frisk
 * @property {string} id - 공지사항 ID
 * @property {string} action - 조작 모드(보기전용, 수정, 등록)
 * @property {string} actionText - 팝업 헤더명
 * @property {string} title - 제목
 * @property {string} description - 내용
 * @deprecated
 */
type ActiveNotice = {
  id: string;
  action: string;
  actionText: string;
  title: string;
  description: string;
};

/**
 * * 검색옵션 타입
 *
 * @author frisk
 * @property {string} orderBy - 정렬
 * @property {string} query - 검색어
 * @property {string[]} filter - 필터
 */
type SearchPostOption = {
  orderBy: string;
  query: string;
  filter: string[];
};

/**
 * * 로컬 상태 타입
 *
 * @author frist
 * @property {string|null} id - 사용자 ID
 * @property {string|null} nickname - 사용자 별칭
 * @property {string|null} email - 사용자 이메일
 * @property {Avatar|null} avatar - 사용자 프로필 사진
 * @property {boolean} isMaster - 운영자 여부
 * @property {boolean} isShowNoticeModal - 공지사항 팝업 보이기 여부
 * @property {boolean} isShowAddPostModal - 게시물 추가 팝업 보이기 여부
 * @property {boolean} isShowSearchBar - 검색바 보이기 여부
 * @property {boolean} isShowFilterBar - 검색 필터 보이기 여부
 * @property {boolean} isShowLoginModal - 로그인 팝업 보이기 여부
 * @property {ActivePost} activePost - 선택한 게시물 정보
 * @property {ActiveNotice} activeNotice - 선택한 공지사항 정보
 * @property {SearchPostOption} searchPostOption - 검색 옵션
 * @property {boolean} isCollapseNav - 네비게이션 확장 여부
 */
export type State = {
  id: string | null;
  nickname: string | null;
  email: string | null;
  avatar: Avatar | null;
  isMaster: boolean;
  isShowNoticeModal: boolean;
  isShowAddPostModal: boolean;
  isShowSearchBar: boolean;
  isShowFilterBar: boolean;
  isShowLoginModal: boolean;
  activePost: ActivePost;
  activeNotice: ActiveNotice;
  searchPostOption: SearchPostOption;
  isCollapseNav: string;
};

type LocalDispatch = Dispatch<Action>;

const Context = createContext<State | null>(null);

const DispatchContext = createContext<LocalDispatch | null>(null);

/**
 * 로컬 상태 기본값
 */
const initialState: State = {
  id: null,
  nickname: null,
  email: null,
  avatar: null,
  isMaster: false,
  isShowNoticeModal: false,
  isShowAddPostModal: false,
  isShowSearchBar: false,
  isShowFilterBar: false,
  isShowLoginModal: false,
  isCollapseNav: "expand",
  activePost: {
    id: "",
    title: "",
    description: ""
  },
  activeNotice: {
    id: "",
    action: "wait",
    actionText: "비활성화",
    title: "",
    description: ""
  },
  searchPostOption: {
    orderBy: "createdAt_DESC",
    query: "",
    filter: []
  }
};

/**
 * * 로컬 상태 제공 컴포넌트
 */
export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
}

/**
 * * Hooks - 로컬 상태 감시 모듈
 */
export function useLocalState() {
  const state = useContext(Context);

  if (!state) {
    throw new Error("not found provider");
  }

  return state;
}

/**
 * * Hooks - 로컬 상태 변경 모듈
 */
export function useLocalDispatch() {
  const dispatch = useContext(DispatchContext);

  if (!dispatch) {
    throw new Error("not found provider");
  }

  return dispatch;
}
