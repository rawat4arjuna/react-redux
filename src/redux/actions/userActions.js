import axios from "axios";
import { CONFIG } from "../../config";
import { SET_LOGIN_TYPE, SET_USER_TYPE, RESET } from "../reducers/types";
import { URLS } from "../../utils/urls";
export const REQUEST_EMAIL_VERIFICATION = (body) => async (dispatch) => {
  try {
    const url = `${CONFIG.BASE_URL}${URLS.REQUEST_EMAIL_VERIFICATION.url}`;
    const response = await axios({
      method: URLS.REQUEST_EMAIL_VERIFICATION.method,
      url: url,
      data: body,
    });
    const { messages } = response.data;
    console.log(messages, response.data);
    dispatch({
      TYPE: SET_LOGIN_TYPE,
      payload: response.data?.results,
    });
  } catch (e) {
    console.log("ERROR", e);
  }
};
