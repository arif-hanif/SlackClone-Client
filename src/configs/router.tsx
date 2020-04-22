import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "../components/Auth/Signup";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Router;
