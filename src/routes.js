import React from "react";
import { Route } from "react-router-dom";
import IndexPage from "./pages/index";
import AboutPage from "./pages/about";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/about" component={AboutPage} />
  </div>
);
export default BaseRouter;
