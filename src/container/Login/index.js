import React from 'react'
import { connect } from "react-redux"
import { Formik } from 'formik'

import * as authorizationService from '../../state/authorization/services'
import logo from '../../logo.svg'
import './style.scss'

const Login = ({ user, history, authorization, logout }) => { 
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formik
          initialValues={{ username: "marcelo@teste.com", password: "123123123" }}
          onSubmit={values => { authorization(values.username, values.password)  }}
          render={props => (
            <form onSubmit={props.handleSubmit} className="container-inputs">
              <input
                type="text"
                placeholder="Username"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.username}
                name="username"
              />
              {props.errors.username && <div id="feedback">{props.errors.username}</div>}
              <input
                type="password"
                placeholder="Password"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                name="password"
              />
              {props.errors.password && <div id="feedback">{props.errors.password}</div>}
              <button type="submit">Log in</button>
            </form>
          )}
        />
      
              <button onClick={() => history.push('/register')}>
                Register
              </button>
              
            
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  authorization: authorizationService.authorization
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
