import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as auth from '../../store/actions';

import './DashboardHeader.scss';

class DashboardHeader extends Component {
  onLogout = () => {
    this.props.logout();
  };
  render() {
    const { user } = this.props;
    return (
      <header>
        <div className="search-area">
          <i className="fas fa-search" />
          <input type="text" name="" value="" />
        </div>
        <div className="user-area">
          <button
            onClick={this.onLogout}
            className="btn btn-primary btn-right-space"
          >
            Logout
          </button>
          <span>{user.email}</span>
        </div>
      </header>
    );
  }
}

DashboardHeader.propTypes = {
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.auth.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(auth.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHeader);
