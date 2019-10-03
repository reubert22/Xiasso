import React from 'react'
import { connect } from 'react-redux'

import * as authorizationService from '../../state/authorization/services'
import './style.scss'

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
