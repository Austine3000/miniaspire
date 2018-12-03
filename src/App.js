import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader';

import Home from './containers/Home/Home';

import DashboardRoute from './routes/DashboardRoute';
import Login from './containers/Login/Login';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={DashboardRoute} />
      </Switch>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default hot(module)(App);
