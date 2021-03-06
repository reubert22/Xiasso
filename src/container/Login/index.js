import React from 'react';
import { connect } from "react-redux";
import { Formik } from 'formik';
import logo from '../../logo.svg';
import './style.scss';

const Login = ({ user, history }) => {

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={values => { console.log(values) }}
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
              <button onClick={() => history.push('/register')}>
                Register
              </button>
            </form>
          )}
        />
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
