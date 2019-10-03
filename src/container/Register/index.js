import React from 'react'
import { connect } from "react-redux"
import { Formik } from 'formik'
import * as Yup from 'yup'

import PasswordInput from '../../components/shared/inputs/Password'
import TextInput from '../../components/shared/inputs/Text'
import './style.scss'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Nome muito pequeno!')
    .max(50, 'Nome muito grande!')
    .required('Campo obrigatório'),
  lastName: Yup.string()
    .min(3, 'Sobrenome muito pequeno!')
    .max(50, 'Sobrenome muito grande!')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Invalid email')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(8, 'A senha deve conter no mínimo 8 caracteres.'),
  confirmPassword: Yup.string().when(['password'], (password, schema) =>
    schema.test(
      'confirmPassword',
      'Senha e confirmação devem ser iguais.',
      value => value === password
    )
  )
});

const Register = ({ history }) => {

  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
          onSubmit={values => { console.log(values) }}
          validationSchema={SignupSchema}
          render={({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
            <form onSubmit={handleSubmit} className="container-inputs">
              <TextInput
                placeholder="Nome"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                name="firstName"
              />
              {errors.firstName && touched.firstName && <div id="feedback">{errors.firstName}</div>}
              <TextInput
                placeholder="Sobrenome"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                name="lastName"
              />
              {errors.lastName && touched.lastName && <div id="feedback">{errors.lastName}</div>}
              <TextInput
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              />
              {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
              <PasswordInput
                placeholder="Senha"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              />
              {errors.password && touched.password && <div id="feedback">{errors.password}</div>}
              <PasswordInput
                placeholder="Confirmar senha"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                name="confirmPassword"
              />
              {errors.confirmPassword && touched.confirmPassword && <div id="feedback">{errors.confirmPassword}</div>}
              <button type="submit">Send</button>
              <button onClick={() => history.goBack()}>
                Cancel
              </button>
            </form>
          )}
        />
      </header>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
