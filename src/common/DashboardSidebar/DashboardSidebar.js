import React, { Component } from 'react';

import store from '../../store/configureStore';
import Navigation from '../../components/navigation/navigation';

import './DashboardSidebar.scss';

class DashboardSidebar extends Component {
  render() {
    const { role } = store.getState().auth.user;
    return (
      <section id="sideMenu">
        <h2 className="logo-dashboard">MiniAspire</h2>
        <Navigation role={role} />
      </section>
    );
  }
}

export default DashboardSidebar;
