/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './route';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PersonalPlants from '../pages/PersonalPlants';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />

      <Route path="/login" component={Login} />
      {/* <Route isPrivate path="/home">
        <Home />
      </Route>  */}
      <Route path="/home" component={Home} />
      <Route path="/personalPlants" component={PersonalPlants} />
    </Switch>
  );
}

export default Routes;
