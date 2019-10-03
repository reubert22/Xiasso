import React from 'react'
import { connect } from "react-redux"
import { Formik } from 'formik'
import * as Yup from 'yup'

import * as authorizationService from '../../state/authorization/services'
import AnimatedButton from '../../components/shared/animated/Button';
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

const Register = ({ history, register, loading }) => (
  <div className="App">
    <header className="App-header">
      <Formik
        initialValues={{ firstName: 'Reubert', lastName: 'Barbosa', email: 'reubertfernandes@gmail.com', password: '123123123', confirmPassword: '123123123' }}
        onSubmit={values => {
          const { firstName, lastName, email, password } = values
          register({ firstName, lastName, email, password })
        }}
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
            <AnimatedButton
              type="submit"
              title={loading ? "..." : "Cadastrar"}
            />
            <AnimatedButton
              type="button"
              title="Voltar"
              onClick={() => history.goBack()}
            />
          </form>
        )}
      />
    </header>
  </div>
);

const mapStateToProps = state => ({
  loading: state.auth.isLoading
});

const mapDispatchToProps = {
  register: authorizationService.register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
