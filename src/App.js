import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './container/utils/PrivateRoute';
import Login from './container/Login';
import { store } from './store';
import Register from './container/Register';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute
            path={`/register`}
            component={Register}
          />
          <PrivateRoute
            path={`/`}
            component={Login}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
