import Router from "next/router";
import { getAccessToken } from "../lib/token";

export default function isAuthenticated() {
  const token = getAccessToken();
  if (!token) {
    alert("세션이 만료되었습니다. 로그인 페이지로 이동합니다.");
    Router.push("/login");
  }
}
