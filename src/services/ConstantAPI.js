export const ConstantAPI = {
  auth: {
    LOGIN: {
      url: "/authorization-service/oauth/token",
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
    CONSULTION: {
      url: "/user-service/api/v1/consultant-request",
      method: "POST",
    },
  }
};