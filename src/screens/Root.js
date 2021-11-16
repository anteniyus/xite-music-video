import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VideoList from "./Video/List";

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path="/" component={VideoList} exact />

      {/* Redirecting all not founded roots to Welcome Screen */}
      <Route component={VideoList} />
    </Switch>
  </Router>
);

export default ScreensRoot;
