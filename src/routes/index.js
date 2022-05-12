import { Route, Switch } from 'react-router-dom';
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
      <Route path="/home">
        <Home />
      </Route> */}
    </Switch>
  );
}

export default Routes;
