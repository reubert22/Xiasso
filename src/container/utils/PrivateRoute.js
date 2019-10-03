import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, uid, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      uid
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
    }
  />
);

const mapStateToProps = state => ({
  uid: state.auth.uid
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute)
