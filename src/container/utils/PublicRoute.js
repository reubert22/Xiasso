import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { firebaseAuth } from "../../utils/firebase"

const PublicRoute = ({ component: Component, user, ...rest }) => {
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
        userAuth
         // ? (<Redirect to={{ pathname: "/dash", state: { from: props.location } }} />)
          ? (console.log("redirect to home page"))
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
)(PublicRoute)
