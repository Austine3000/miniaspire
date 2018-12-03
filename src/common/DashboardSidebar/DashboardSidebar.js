import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './DashboardSidebar.scss';

class DashboardSidebar extends Component {
  render() {
    return (
      <section id="sideMenu">
        <h2 className="logo-dashboard">MiniAspire</h2>
        <nav>
          <NavLink to="/dashboard/overview">
            <i className="fas fa-tachometer-alt" />
            <span>Overview</span>
          </NavLink>
          <NavLink to="/dashboard/loan">
            <i className="fas fa-file-alt" />
            <span>Loan</span>
          </NavLink>
          <NavLink to="/dashboard/myloan">
            <i className="fas fa-money-bill-wave-alt" />
            <span>My Loan</span>
          </NavLink>
        </nav>
      </section>
    );
  }
}

export default DashboardSidebar;
