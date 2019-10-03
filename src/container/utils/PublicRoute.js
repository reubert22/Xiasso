import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PublicRoute = ({ component: Component, uid, origin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      uid
      ? (<Redirect to={{ pathname: "/home", state: { from: props.location } }} />)
      : (<Component {...props} />)
    }
  />
);

const mapStateToProps = state => ({
  uid: state.auth.uid
});

export default connect(
  mapStateToProps,
  null
)(PublicRoute)
