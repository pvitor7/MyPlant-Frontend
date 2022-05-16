/* eslint-disable */
import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Equipe from "../pages/Equipe";
import Homepage from "../pages/Home";

function Rotas() {
  return (
    <div>
      <Switch>
        <Route exatc path="/Sobre">
          <Equipe />
        </Route>

        <Route exatc path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default Rotas;
