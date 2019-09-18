import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        user.user.isLogged
          ? (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
          : (<Component {...props} />)
      }
    />
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute)
