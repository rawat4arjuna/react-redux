import axios from "axios";
import { toast } from "react-toastify";
import { CONFIG } from "../../config";
import {
  SET_LOGIN_TYPE,
  SET_SIGNUP_TYPE,
  RESET,
  SET_DATA,
} from "../reducers/types";
import { URLS } from "../../utils/urls";
import { setItem } from "../../utils/localStroage";
export const REQUEST_EMAIL_VERIFICATION = (body) => async (dispatch) => {
  try {
    const url = `${CONFIG.BASE_URL}${URLS.REQUEST_EMAIL_VERIFICATION.url}`;
    const response = await axios({
      method: URLS.REQUEST_EMAIL_VERIFICATION.method,
      url: url,
      data: body,
    });
    const { message } = response.data;
    console.log(message, response.data);
    toast.success(message);
    await setItem("Auth", {
      token: response.data?.results?.token,
      isVerification: response?.data?.results?.isLogin,
    });
    dispatch({
      type: SET_LOGIN_TYPE,
      payload: response.data?.results,
    });

    dispatch({
      type: SET_DATA,
      payload: {
        email: body?.email,
        isVerification: response?.data?.results?.isLogin,
      },
    });
  } catch (e) {
    console.log("ERROR", e);
  }
};

export const SIGN_UP = (body) => async (dispatch) => {
  try {
    const url = `${CONFIG.BASE_URL}${URLS.SIGN_UP.url}`;
    const response = await axios({
      method: URLS.SIGN_UP.method,
      url: url,
      data: body,
    });
    const { message } = response.data;
    toast.success(message);
    dispatch({
      type: SET_DATA,
      payload: { isVerification: response.data?.success },
    });
  } catch (e) {
    console.log("ERROR", e);
  }
};

export const VERIFY_EMAIL_TOKEN = (body) => async (dispatch) => {
  try {
    const url = `${CONFIG.BASE_URL}${URLS.VERIFY_EMAIL_TOKEN.url}`;
    const response = await axios({
      method: URLS.VERIFY_EMAIL_TOKEN.method,
      url: url,
      data: body,
    });
    const { message, results, success } = response.data;
    if (success) {
      toast.success(message);
      if (results?.isLogin) {
        dispatch({
          type: SET_DATA,
          payload: { profile: results.user },
        });
        // setItem("authToken", results.user.customToken);
        return true;
      } else {
        toast.error("Something went wrong please try again");
        return false;
      }
    } else {
      toast.error(message);
    }
  } catch (e) {
    toast.error("Something went wrong please try again");
  }
};

export const RESEND_EMAIL_TOKEN = async (body) => {
  try {
    const url = `${CONFIG.BASE_URL}${URLS.RESEND_EMAIL_TOKEN.url}`;
    const response = await axios({
      method: URLS.RESEND_EMAIL_TOKEN.method,
      url: url,
      data: body,
    });
    const { message, success } = response.data;
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  } catch (e) {
    toast.error("Something went wrong please try again");
  }
};

export const LOGOUT =
  ({ id, accessToken }) =>
  async (dispatch) => {
    try {
      console.log(id, accessToken);
      const url = `${CONFIG.BASE_URL}${URLS.LOGOUT_USER.url}${id}`;
      const response = await axios({
        method: URLS.LOGOUT_USER.method,
        url: url,
        headers: { Authorization: `Bearer ${id},${accessToken}` },
      });
      const { message, success } = response.data;
      if (success) {
        toast.success(message);
        dispatch({
          type: RESET,
        });
        return true;
      } else {
        toast.error(message);
        return false;
      }
    } catch (e) {
      toast.error("Something went wrong please try again");
    }
  };
