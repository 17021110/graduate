// actions.js
export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});
