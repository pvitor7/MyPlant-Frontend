/* eslint-disable */
import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

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
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/sobre" component={Equipe} />
      <Route path="/termos" component={Termos} />
      <Route path="/informacoes" component={Detalhes} />
      <Route isPrivate path="/personalPlants/" component={PersonalPlants} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default Routes;
