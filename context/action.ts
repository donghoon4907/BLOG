import { Avatar } from "../interfaces";

/**
 * 내정보 업데이트
 *
 * @action
 * @author frisk
 */
export const SET_ME = "SET_ME";
/**
 * 공지사항 팝업 보이기
 *
 * @action
 * @author frisk
 */
export const SHOW_NOTICE_MODAL = "SHOW_NOTICE_MODAL";
/**
 * 공지사항 팝업 숨기기
 *
 * @action
 * @author frisk
 */
export const HIDE_NOTICE_MODAL = "HIDE_NOTICE_MODAL";
/**
 * 게시물 팝업 보이기
 *
 * @action
 * @author frisk
 */
export const SHOW_POST_MODAL = "SHOW_POST_MODAL";
/**
 * 게시물 팝업 숨기기
 *
 * @action
 * @author frisk
 */
export const HIDE_POST_MODAL = "HIDE_POST_MODAL";
/**
 * 로그인 팝업 보이기
 *
 * @action
 * @author frisk
 */
export const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL";
/**
 * 로그인 팝업 숨기기
 *
 * @action
 * @author frisk
 */
export const HIDE_LOGIN_MODAL = "HIDE_LOGIN_MODAL";
/**
 * 검색바 보이기
 *
 * @action
 * @author frisk
 */
export const SHOW_SEARCH_BAR = "SHOW_SEARCH_BAR";
/**
 * 검색바 숨기기
 *
 * @action
 * @author frisk
 */
export const HIDE_SEARCH_BAR = "HIDE_SEARCH_BAR";
/**
 * 검색 필터 보이기
 *
 * @action
 * @author frisk
 */
export const SHOW_FILTER_BAR = "SHOW_FILTER_BAR";
/**
 * 검색 필터 숨기기
 *
 * @action
 * @author frisk
 */
export const HIDE_FILTER_BAR = "HIDE_FILTER_BAR";
/**
 * 게시물 검색
 *
 * @action
 * @author frisk
 */
export const SEARCH_POST = "SEARCH_POST";
/**
 * 네비게이션 확장
 *
 * @action
 * @author frisk
 */
export const EXPAND_NAVIGATION = "EXPAND_NAVIGATION";
/**
 * 네비게이션 수축
 *
 * @action
 * @author frisk
 */
export const CONTRACT_NAVIGATION = "CONTRACT_NAVIGATION";

/**
 * 액션 타입
 */
export type Action =
  | {
      type: "SET_ME";
      id: string | null;
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
      orderBy?: string;
      searchKeyword?: string;
      filter?: string[];
    }
  | { type: "EXPAND_NAVIGATION" }
  | { type: "CONTRACT_NAVIGATION" };
