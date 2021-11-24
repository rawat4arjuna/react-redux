import { SET_LOGIN_TYPE, SET_USER_TYPE, RESET, SET_DATA } from "./types";
const initialState = {
  user: {},
  email: "",
};
const reducer = (state = initialState, action) => {
  console.log("p[p[p[=====", action);
  switch (action.type) {
    case SET_LOGIN_TYPE:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_TYPE:
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
        user: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
