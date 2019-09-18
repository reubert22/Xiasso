import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, logout, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        window.sessionStorage.getItem('token') ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
};


export default PublicRoute
