/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './route';

import PersonalPlants from '../pages/PersonalPlants';
import LadingPage from '../pages/LadingPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Equipe from '../pages/Equipe';
import Termos from '../pages/Termos';
import Detalhes from '../pages/Sobre';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LadingPage} />
      <Route path="/home" component={Home} />

      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      
      <Route path="/sobre" component={Equipe} />
      <Route path="/termos" component={Termos} />
      <Route path="/informacoes" component={Detalhes} />
      <Route isPrivate path="/personalPlants" component={PersonalPlants} />
    </Switch>
  );
}

export default Routes;
