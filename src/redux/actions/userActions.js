import axios from "axios";
import { toast } from "react-toastify";
import { CONFIG } from "../../config";
import {
  SET_LOGIN_TYPE,
  SET_USER_TYPE,
  RESET,
  SET_DATA,
} from "../reducers/types";
import { URLS } from "../../utils/urls";

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
    dispatch({
      type: SET_DATA,
      payload: body,
    });
    dispatch({
      type: SET_LOGIN_TYPE,
      payload: response.data?.results,
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
    console.log(message, response.data);
    toast.success(message);
    dispatch({
      type: SET_DATA,
      payload: body,
    });
    dispatch({
      type: SET_LOGIN_TYPE,
      payload: response.data?.results,
    });
  } catch (e) {
    console.log("ERROR", e);
  }
};
