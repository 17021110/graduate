export const ConstantAPI = {
  auth: {
    LOGIN_USER: {
      url: "/api/v1/users/login",
      method: "POST",
    },
    LOGIN_ADMIN: {
      url: "/api/v1/admin/login",
      method: "POST",
    },
    REGISTER_ACOUNT: {
      url: "/api/v1/users/register",
      method: "POST",
    },
  },
  product: {
    GET_ALL: {
      url: "/api/v1/product",
      method: "GET",
    },
    CREATE: {
      url: "/api/v1/product",
      method: "POST",
    },
  },
};