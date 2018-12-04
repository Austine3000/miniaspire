import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import store from '../../store/configureStore';

import './DashboardSidebar.scss';

class DashboardSidebar extends Component {
  render() {
    const { user } = store.getState().auth;
    return (
      <section id="sideMenu">
        <h2 className="logo-dashboard">MiniAspire</h2>
        <nav>
          {user.role === 'admin' ? (
            <NavLink to="/dashboard/loan">
              <i className="fas fa-file-alt" />
              <span>Loan</span>
            </NavLink>
          ) : (
            ''
          )}
          {user.role === null ? (
            <NavLink to="/dashboard/myloan">
              <i className="fas fa-money-bill-wave-alt" />
              <span>My Loan</span>
            </NavLink>
          ) : (
            ''
          )}
        </nav>
      </section>
    );
  }
}

export default DashboardSidebar;
