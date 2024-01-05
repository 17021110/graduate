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
    LOGOUT: {
      url: "/authorization-service/oauth/token/revoke",
      method: "DELETE",
    },
    CHANGE_PASSWORD: {
      url: "/user-service/api/v1/user/password",
      method: "PATCH",
    },
    FORGOT_PASSWORD: {
      url: "/user-service/api/v1/user/forgot-password",
      method: "PATCH",
    },
    RESET_PASSWORD: {
      url: "/user-service/api/v1/user/reset-password",
      method: "GET",
    },
    REGISTER_ACOUNT: {
      url: "/api/v1/users/register",
      method: "POST",
    },
  },
};