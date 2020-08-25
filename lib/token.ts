import isBrowser from "./isBrowser";

let accessToken = isBrowser ? localStorage.getItem("token") : "";

export const setAccessToken = (s: string) => {
  localStorage.setItem("token", s);
  accessToken = s;
};

export const removeAccessToken = () => {
  localStorage.removeItem("token");
  accessToken = "";
};

export const getAccessToken = () => {
  return accessToken;
};
