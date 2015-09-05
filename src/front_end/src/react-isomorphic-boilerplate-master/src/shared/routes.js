import { Route } from "react-router";
import React from "react";

import AppHandler from "./components/AppHandler";
import AboutHandler from "./components/AboutHandler";

export default (
  <Route>
    <Route name="home" path="/" handler={AppHandler}/>
    <Route name="about" path="/about" handler={AboutHandler}/>
  </Route>
);
