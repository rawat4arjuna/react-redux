export const URLS = {
  REQUEST_EMAIL_VERIFICATION: {
    url: "/users/email",
    method: "POST",
  },
  VERIFY_EMAIL_TOKEN: {
    url: "/users/email/verify",
    method: "PUT",
  },
  SIGN_UP: {
    url: "/users",
    method: "POST",
  },
  RESEND_EMAIL_TOKEN: {
    url: "/users/token/resendtoken",
    method: "PUT",
  },
  CHECK_REFERAL_TOKEN: {
    url: "/users/referral/",
    method: "GET",
  },
  LOGOUT_USER: {
    url: "/users/logout/",
    method: "DELETE",
  },
};
