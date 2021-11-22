import React from "react";
import { Route, Redirect } from "react-router";
import { getItem } from "../utils/localStroage";
export default function Public({ path, component }) {
  console.log("-----------------------", getItem("token"));
  if (getItem("token")) {
    console.log("[[[[[", getItem("token"));
    return <Redirect to={"/home"} />;
  }
  return <Route exact path={path} component={component} />;
}
