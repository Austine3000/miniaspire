import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = props => {
  return (
    <nav>
      {props.role === 'admin' ? (
        <NavLink to="/dashboard/loan">
          <i className="fas fa-file-alt" />
          <span>Loan</span>
        </NavLink>
      ) : (
        ''
      )}
      {props.role === null ? (
        <NavLink to="/dashboard/myloan">
          <i className="fas fa-money-bill-wave-alt" />
          <span>My Loan</span>
        </NavLink>
      ) : (
        ''
      )}
    </nav>
  );
};

Navigation.propTypes = {
  user: PropTypes.object
};

export default Navigation;
