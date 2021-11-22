const initialState = {
  state: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOME_ACTION":
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
