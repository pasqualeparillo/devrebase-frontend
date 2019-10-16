import React from "react";
import { Route } from "react-router-dom";
import IndexPage from "./pages/index";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={IndexPage} />
  </div>
);
export default BaseRouter;
