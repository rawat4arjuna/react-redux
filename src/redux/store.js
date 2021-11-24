import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from "redux-state-sync";

import RootReducer from "./reducers/reducers";

const config = {
  whitelist: ["RESET"],
};
const initialState = {};
const middlewares = [thunk, createStateSyncMiddleware(config)];

export const Store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

initStateWithPrevTab(Store);
