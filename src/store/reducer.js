const initialState = {
  data: [],
  listProductAdmin: [],
  listProductUser: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_DATA_PRODUCT_ADMIN":
      return { ...state, listProductAdmin: action.payload };
    case "SET_DATA_PRODUCT_USER":
      return { ...state, listProductUser: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
