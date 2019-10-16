import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import IndexPage from "./pages/index";

const BaseRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={IndexPage} />
    </div>
  </Router>
);
export default BaseRouter;
