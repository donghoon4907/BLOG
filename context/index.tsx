import React, { useReducer, useContext, createContext, Dispatch } from "react";

type Avatar = {
  url: string;
};

type ActivePost = {
  id: string;
  title: string;
  description: string;
  status: string;
  url: string;
};

type ActiveRoom = {
  id: string;
};

// type for state
type State = {
  id: string;
  nickname: string;
  email: string;
  avatar: Avatar;
  isMaster: boolean;
  isShowNoticeModal: boolean;
  isShowAddPostModal: boolean;
  activePost: ActivePost;
  activeRoom: ActiveRoom[];
};

export const SET_ME = "SET_ME";
export const SET_NOTICE_MODAL = "SET_NOTICE_MODAL";
export const SHOW_POST_MODAL = "SHOW_POST_MODAL";
export const HIDE_POST_MODAL = "HIDE_POST_MODAL";
export const ADD_ROOM = "ADD_ROOM";
export const REMOVE_ROOM = "REMOVE_ROOM";

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
  | { type: "SET_NOTICE_MODAL"; payload: boolean }
  | {
      type: "SHOW_POST_MODAL";
      isShow: boolean;
      id?: string;
      title?: string;
      description?: string;
      status?: string;
      url?: string;
    }
  | { type: "HIDE_POST_MODAL"; payload: boolean }
  | { type: "ADD_ROOM"; payload: string }
  | { type: "REMOVE_ROOM"; payload: string };

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
        isShowNoticeModal: action.payload
      };
    case "SHOW_POST_MODAL":
      return {
        ...state,
        isShowAddPostModal: action.isShow,
        activePost: {
          id: action.id ? action.id : "",
          title: action.title ? action.title : "",
          description: action.description ? action.description : "",
          status: action.status ? action.status : "",
          url: action.url ? action.url : ""
        }
      };
    case "HIDE_POST_MODAL":
      return {
        ...state,
        isShowAddPostModal: action.payload,
        activePost: {
          id: "",
          title: "",
          description: "",
          status: "",
          url: ""
        }
      };
    case "ADD_ROOM":
      return {
        ...state,
        activeRoom: state.activeRoom.concat([action.payload])
      };
    case "REMOVE_ROOM":
      return {
        ...state,
        activeRoom: state.activeRoom.filter(v => v.id !== action.payload)
      };
    default:
      return { ...state };
  }
}

const initialState: State = {
  id: "",
  nickname: "",
  email: "",
  avatar: {
    url: ""
  },
  isMaster: false,
  isShowNoticeModal: false,
  isShowAddPostModal: false,
  activePost: {
    id: "",
    title: "",
    description: "",
    status: "",
    url: ""
  },
  activeRoom: []
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

// for hooks
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
