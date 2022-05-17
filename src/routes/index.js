/* eslint-disable */
import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signup} />
      <Route path="/login/" component={Login} />
      <Route isPrivate path="/home" component={Home} />
    </Switch>
  );
}

export default Routes;
