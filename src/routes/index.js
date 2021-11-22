import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

import Public from "./public";
import Private from "./private";
import Login from "../pages/login";
import Home from "../pages/homepage";
import Error from "../pages/404";
export default function Index() {
  return (
    <Router>
      <Switch>
        <Private path="/home" component={Home} />
        <Public path="/" component={Login} />
      </Switch>
    </Router>
  );
}
