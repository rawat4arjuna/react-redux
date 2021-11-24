import { SET_LOGIN_TYPE, SET_SIGNUP_TYPE, RESET, SET_DATA } from "./types";
const initialState = {
  user: {},
  email: "",
  isVerification: false,
  profile: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_TYPE:
      return {
        ...state,
        user: action.payload,
      };
    case SET_SIGNUP_TYPE:
      return {
        ...state,
        user: action.payload,
      };
    case SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case RESET:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
export default reducer;
