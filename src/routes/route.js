import { useSelector } from "react-redux";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

function Route({ isPrivate = false, component: Component, ...rest }) {
  //   const token = JSON.parse(localStorage.getItem("token"));
  const { token } = useSelector((state) => state.userSignIn);

  // true e true = ok
  // true e false = login
  // false e true = home
  // fase e false = ok

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/home"} />
        );
      }}
    />
  );
}

export default Route;
