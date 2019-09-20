import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { firebaseAuth } from "../../utils/firebase"

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const [userAuth, setUserAuth] = useState(false)

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(response => {
      response ? setUserAuth(response) : setUserAuth(false)
    })
  },[])
  console.log(userAuth)
  return (
    <Route
      {...rest}
      render={props =>
        !userAuth
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
