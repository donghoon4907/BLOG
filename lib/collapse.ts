import isBrowser from "./is_browser";

let isCollapse = isBrowser ? localStorage.getItem("collapse") : "expand";

export const setCollapse = (s: string) => {
  localStorage.setItem("collapse", s);
  isCollapse = s;
};

export const getCollapse = () => {
  return isCollapse;
};
