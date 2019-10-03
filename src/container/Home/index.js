import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import * as authorizationService from '../../state/authorization/services'

const Home = ({ logout }) => {
  const handleLogout = () => {
    logout()
  }

  return (
    <div>Home page bro
    <button onClick={() => handleLogout()}>
      Logout
    </button>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  logout: authorizationService.logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
