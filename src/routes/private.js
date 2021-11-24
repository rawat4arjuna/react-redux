import React from "react";
import { Route, Redirect } from "react-router";
import { getItem } from "../utils/localStroage";
export default function Private({ path, component }) {
  // if (!getItem("token")) {
  //   return <Redirect to={"/"} />;
  // }
  return <Route exact path={path} component={component} />;
}
