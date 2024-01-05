// actions.js
export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const LoginUser = (data) => ({
  type: "LOGIN_USER",
  payload: { data },
});

export const LoginAdmin = (data) => ({
  type: "LOGIN_ADMIN",
  payload: { data },
});

export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});
