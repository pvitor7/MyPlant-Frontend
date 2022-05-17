/* eslint-disable */
import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Equipe from "../pages/Equipe";
import Homepage from "../pages/Home";
import LandingPage from "../pages/Lading-Page";

function Rotas() {
  return (
    <div>
      <Switch>
        <Route exatc path="/Sobre">
          <Equipe />
        </Route>

        <Route exatc path="/Homepage">
          <Homepage />
        </Route>

        <Route exatc path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Rotas;
