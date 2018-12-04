import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import store from '../store/configureStore';

import DashboardSidebar from '../common/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '../common/DashboardHeader/DashboardHeader';

import './DashboardRoute.scss';

import asyncComponent from '../hoc/asyncComponent';

const AsyncLoan = asyncComponent(() => {
  return import('../containers/Loan/Loan');
});

const AsyncMyLoan = asyncComponent(() => {
  return import('../containers/MyLoan/MyLoan');
});

const AsyncRequest = asyncComponent(() => {
  return import('../containers/Request/Request');
});

class DashboardRoute extends Component {
  render() {
    const { user, isAuthenticated } = store.getState().auth;
    return (
      <div className="dasboard-body">
        <DashboardSidebar />
        <DashboardHeader />
        <section id="content-area">
          {user.role === 'admin' && isAuthenticated ? (
            <Switch>
              <Route path="/dashboard/loan" component={AsyncLoan} />
              <Redirect to="/dashboard/loan" />
            </Switch>
          ) : user.role === null && isAuthenticated ? (
            <Switch>
              <Route exact path="/dashboard/myloan" component={AsyncMyLoan} />{' '}
              <Route
                path="/dashboard/myloan/request"
                component={AsyncRequest}
              />
              <Redirect to="/dashboard/myloan" />
            </Switch>
          ) : (
            <Switch>
              <Redirect to="/" />
            </Switch>
          )}
        </section>
      </div>
    );
  }
}

export default DashboardRoute;
