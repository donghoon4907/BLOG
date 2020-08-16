import React, { useReducer, useContext, createContext, Dispatch } from "react";

type Avatar = {
  url: string;
};

// type for state
type State = {
  id: string;
  nickname: string;
  email: string;
  avatar: Avatar;
  isMaster: boolean;
  isShowNoticeModal: boolean;
};

// type for action
type Action =
  | {
      type: "SET_ME";
      id: string;
      nickname: string;
      email: string;
      avatar: Avatar;
      isMaster: boolean;
    }
  | { type: "SET_NOTICE_MODAL"; isShowNoticeModal: boolean };

export const SET_ME = "SET_ME";
export const SET_NOTICE_MODAL = "SET_NOTICE_MODAL";

// type for dispatch
type VssDispatch = Dispatch<Action>;

// create context
const VssContext = createContext<State | null>(null);
const VssDispatchContext = createContext<VssDispatch | null>(null);

// define reducer
function reducer(state, action) {
  switch (action.type) {
    case "SET_ME":
      return {
        ...state,
        id: action.id,
        nickname: action.nickname,
        email: action.email,
        avatar: action.avatar,
        isMaster: action.isMaster
      };
    case "SET_NOTICE_MODAL":
      return {
        ...state,
        isShowNoticeModal: action.isShowNoticeModal
      };
    default:
      return { ...state };
  }
}

export function VssProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    id: null,
    nickname: null,
    email: null,
    avatar: null,
    isMaster: false,
    isShowNoticeModal: false
  });

  return (
    <VssContext.Provider value={state}>
      <VssDispatchContext.Provider value={dispatch}>
        {children}
      </VssDispatchContext.Provider>
    </VssContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
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
