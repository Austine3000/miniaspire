import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './DashboardHeader.scss';

class DashboardHeader extends Component {
  render() {
    return (
      <header>
        <div className="search-area">
          <i className="fas fa-search" />
          <input type="text" name="" value="" />
        </div>
        <div className="user-area">
          <NavLink to="#" className="add">
            + Add
          </NavLink>
          <NavLink to="#" className="notification">
            <i className="far fa-bell" />
            <span className="circle">3</span>
          </NavLink>
          <NavLink to="#">
            <div className="user-img" />
            <i className="fas fa-caret-down" />
          </NavLink>
        </div>
      </header>
    );
  }
}

export default DashboardHeader;
