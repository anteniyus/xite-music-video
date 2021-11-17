import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScreensVideosList from "./Video/List";

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path="/" component={ScreensVideosList} exact />

      {/* Redirecting all not founded roots to Welcome Screen */}
      <Route component={ScreensVideosList} />
    </Switch>
  </Router>
);

export default ScreensRoot;
