import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import PrivateRoute from './container/utils/PrivateRoute';
import PublicRoute from './container/utils/PublicRoute';
import Register from './container/Register';
import Login from './container/Login';
import Home from './container/Home';
import EmailVerify from './components/notifications/EmailVerify';
import { store } from './store';

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
        <ToastContainer
          pauseOnVisibilityChange
          position="top-right"
          closeOnClick
          newestOnTop
          rtl={false}
          draggable
        />
      </Router>
    </Provider>
  );
}

export default App;
