import { SET_LOGIN_TYPE, SET_USER_TYPE, RESET } from "./types";
const initialState = {
  user: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_TYPE:
      return {
        ...state,
        state: action.payload,
      };
    case SET_USER_TYPE:
      return {
        ...state,
        state: action.payload,
      };
    case RESET:
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
