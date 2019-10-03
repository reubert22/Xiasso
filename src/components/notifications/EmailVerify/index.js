import React from 'react'
import { connect } from "react-redux"

const EmailVerify = ({ emailVerified }) => {
  return (emailVerified === undefined || emailVerified ? null : <div><span>Precisa verificar email</span></div>)
}

const mapStateToProps = state => ({
  emailVerified: state.auth.user.emailVerified
});

export default connect(
  mapStateToProps,
  null
)(EmailVerify)