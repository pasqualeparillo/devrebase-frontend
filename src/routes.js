import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import IndexPage from "./pages/index";
import ResultsPage from "./pages/results";
import GitHubLogin from "./login/github";
const BaseRouter = () => (
  <Router>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/results" component={ResultsPage} />
    <Route exact path="/github" component={GitHubLogin} />
  </Router>
);
export default BaseRouter;
