import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './route';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function Routes() {

  return (
    <Switch>
      <Route path="/">
        <Signup />
      </Route>
      {/* <Route path="/login">
        <Login />
      </Route>
      <Route isPrivate path="/home">
        <Home />
      </Route>  */}
    </Switch>
  );
}

export default Routes;
