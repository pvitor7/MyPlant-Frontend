import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import Route from './route';

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />

      <Route path="/login/" component={Login} />
      {/* <Route isPrivate path="/home">
        <Home />
      </Route>  */}
    </Switch>
  );
}

export default Routes;
