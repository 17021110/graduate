import axios from "axios";
import { TOKEN, TOKEN_ADMIN } from "../constants/index";

export const setHeaders = (header) => {
  axios.defaults.headers.common = header;
};

export const getToken = () => {
  const token = window.localStorage.getItem(TOKEN);
  // token not exists
  if (!token) {
    clearStorage();
    return undefined;
  }

  return JSON.parse(token);
};

export const getTokenAdmin = () => {
  const token = window.localStorage.getItem(TOKEN_ADMIN);
  // token not exists
  if (!token) {
    clearStorage();
    return undefined;
  }

  return JSON.parse(token);
};

export const setUser = (data) => {
  return window.localStorage.setItem("user", data);
};

export const getUser = () => {
  if (window.localStorage.getItem("user") !== null) {
    return JSON?.parse(window.localStorage.getItem("user") || "");
  } else {
    return {};
  }
};

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const setTokenAdmin = (token) => {
  localStorage.setItem(TOKEN_ADMIN, token);
};

export const clearStorage = async () => {
  (Object.keys(window.localStorage) || []).forEach((key) => {
    window.localStorage.removeItem(key);
  });
};
