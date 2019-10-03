import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { store } from './store';
import PublicRoute from './container/utils/PublicRoute';
import PrivateRoute from './container/utils/PrivateRoute';
import Login from './container/Login';
import Register from './container/Register';
import Home from './container/Home';
import EmailVerify from './components/notifications/EmailVerify';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <EmailVerify />
        <Switch>
          <PublicRoute
            path={`/register`}
            component={Register}
          />
          <PrivateRoute
            path={'/home'}
            component={Home}
          />
          <PublicRoute
            path={`/`}
            component={Login}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
