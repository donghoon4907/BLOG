import React, { useReducer, useContext, createContext, Dispatch } from "react";
import { Avatar } from "../interfaces";

export type ActivePost = {
  postId: string;
  title: string;
  description: string;
  status: string;
  url: string;
};

export type ActiveNotice = {
  noticeId: string;
  action: string;
  actionText: string;
  title: string;
  description: string;
};

export enum PostOrderByInput {
  createdAt_DESC = "createdAt_DESC",
  createdAt_ASC = "createdAt_ASC"
}

export type SearchPostOption = {
  orderBy: PostOrderByInput | null;
  searchKeyword: string;
  filter: string[];
};

// type for state
type State = {
  userId: string | null;
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
};

export const SET_ME = "SET_ME";
export const SHOW_NOTICE_MODAL = "SHOW_NOTICE_MODAL";
export const HIDE_NOTICE_MODAL = "HIDE_NOTICE_MODAL";
export const SHOW_POST_MODAL = "SHOW_POST_MODAL";
export const HIDE_POST_MODAL = "HIDE_POST_MODAL";
export const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL";
export const HIDE_LOGIN_MODAL = "HIDE_LOGIN_MODAL";
export const SHOW_SEARCH_BAR = "SHOW_SEARCH_BAR";
export const HIDE_SEARCH_BAR = "HIDE_SEARCH_BAR";
export const SHOW_FILTER_BAR = "SHOW_FILTER_BAR";
export const HIDE_FILTER_BAR = "HIDE_FILTER_BAR";
export const SEARCH_POST = "SEARCH_POST";

// type for action
type Action =
  | {
      type: "SET_ME";
      userId: string | null;
      nickname: string | null;
      email: string | null;
      avatar: Avatar | null;
      isMaster: boolean;
    }
  | {
      type: "SHOW_NOTICE_MODAL";
      noticeId: string;
      action: string;
      actionText: string;
      title: string;
      description: string;
    }
  | { type: "HIDE_NOTICE_MODAL" }
  | {
      type: "SHOW_POST_MODAL";
      postId: string;
      title: string;
      description: string | null;
      status: string;
      url: string;
    }
  | { type: "HIDE_POST_MODAL" }
  | { type: "SHOW_SEARCH_BAR" }
  | { type: "HIDE_SEARCH_BAR" }
  | { type: "SHOW_FILTER_BAR" }
  | { type: "HIDE_FILTER_BAR" }
  | { type: "SHOW_LOGIN_MODAL" }
  | { type: "HIDE_LOGIN_MODAL" }
  | {
      type: "SEARCH_POST";
      orderBy?: string | null;
      searchKeyword?: string;
      filter?: string[];
    };

// type for dispatch
type VssDispatch = Dispatch<Action>;

// create context
const VssContext = createContext<State | null>(null);
const VssDispatchContext = createContext<VssDispatch | null>(null);

// define reducer
function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_ME":
      return {
        ...state,
        userId: action.userId,
        nickname: action.nickname,
        email: action.email,
        avatar: action.avatar,
        isMaster: action.isMaster
      };
    case "SHOW_NOTICE_MODAL":
      return {
        ...state,
        isShowNoticeModal: true,
        activeNotice: {
          noticeId: action.noticeId,
          action: action.action,
          actionText: action.actionText,
          title: action.title,
          description: action.description
        }
      };
    case "HIDE_NOTICE_MODAL":
      return {
        ...state,
        isShowNoticeModal: false,
        activeNotice: {
          noticeId: "",
          action: "wait",
          actionText: "비활성화",
          title: "",
          description: ""
        }
      };
    case "SHOW_POST_MODAL":
      return {
        ...state,
        isShowAddPostModal: true,
        activePost: {
          postId: action.postId,
          title: action.title,
          description: action.description,
          status: action.status,
          url: action.url
        }
      };

    case "HIDE_POST_MODAL":
      return {
        ...state,
        isShowAddPostModal: false,
        activePost: {
          postId: "",
          title: "",
          description: "",
          status: "",
          url: ""
        }
      };
    case "SHOW_SEARCH_BAR":
      return {
        ...state,
        isShowSearchBar: true
      };
    case "HIDE_SEARCH_BAR":
      return {
        ...state,
        isShowSearchBar: false
      };
    case "SHOW_FILTER_BAR":
      return {
        ...state,
        isShowFilterBar: true
      };
    case "HIDE_FILTER_BAR":
      return {
        ...state,
        isShowFilterBar: false
      };
    case "SHOW_LOGIN_MODAL":
      return {
        ...state,
        isShowLoginModal: true
      };
    case "HIDE_LOGIN_MODAL":
      return {
        ...state,
        isShowLoginModal: false
      };
    case "SEARCH_POST":
      return {
        ...state,
        searchPostOption: {
          orderBy: action.hasOwnProperty("orderBy")
            ? action.orderBy
            : state.searchPostOption.orderBy,
          searchKeyword: action.hasOwnProperty("searchKeyword")
            ? action.searchKeyword
            : state.searchPostOption.searchKeyword,
          filter: action.hasOwnProperty("filter")
            ? action.filter
            : state.searchPostOption.filter
        }
      };
    default:
      return { ...state };
  }
}

const initialState: State = {
  userId: null,
  nickname: null,
  email: null,
  avatar: null,
  isMaster: false,
  isShowNoticeModal: false,
  isShowAddPostModal: false,
  isShowSearchBar: false,
  isShowFilterBar: false,
  isShowLoginModal: false,
  activePost: {
    postId: "",
    title: "",
    description: "",
    status: "",
    url: ""
  },
  activeNotice: {
    noticeId: "",
    action: "wait",
    actionText: "비활성화",
    title: "",
    description: ""
  },
  searchPostOption: {
    orderBy: null,
    searchKeyword: "",
    filter: []
  }
};

export function VssProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VssContext.Provider value={state}>
      <VssDispatchContext.Provider value={dispatch}>
        {children}
      </VssDispatchContext.Provider>
    </VssContext.Provider>
  );
}

export function useVssState() {
  const state = useContext(VssContext);
  if (!state) throw new Error("not found provider");
  return state;
}

export function useVssDispatch() {
  const dispatch = useContext(VssDispatchContext);
  if (!dispatch) throw new Error("not found provider");
  return dispatch;
}
