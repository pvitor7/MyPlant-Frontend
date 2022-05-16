import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/login/" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default Routes;
