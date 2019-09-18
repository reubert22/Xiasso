import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from './container/utils/PublicRoute';
import Login from './container/Login'
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
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
