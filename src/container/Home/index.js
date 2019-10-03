import React from 'react'
import { connect } from 'react-redux'

import * as authorizationService from '../../state/authorization/services'
import AnimatedButton from '../../components/shared/animated/Button';
import './style.scss'

const Home = ({ logout }) => (
  <div>
    <span>
      Home page bro
      </span>
    <AnimatedButton
      type="button"
      title="Sair"
      onClick={logout}
    />
  </div>
);

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
