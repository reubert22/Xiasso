import React from 'react'
import { connect } from "react-redux"
import { Formik } from 'formik'
import * as Yup from 'yup'

import * as authorizationService from '../../state/authorization/services'
import PasswordInput from '../../components/shared/inputs/Password'
import TextInput from '../../components/shared/inputs/Text'
import logo from '../../logo.svg'
import './style.scss'

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório'),
});

const Login = ({ uid, history, authorization }) => {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => { authorization(values.email, values.password) }}
          validationSchema={SignInSchema}
          render={({ handleSubmit, handleChange, handleBlur, errors, touched, values }) => (
            <form onSubmit={handleSubmit} className="container-inputs">
              <TextInput
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              />
              {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
              <PasswordInput
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              />
              {errors.password && touched.password && <div id="feedback">{errors.password}</div>}
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
  uid: state.auth.uid
});

const mapDispatchToProps = {
  authorization: authorizationService.authorization
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
