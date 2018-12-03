import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import store from '../../store/configureStore';
import * as auth from '../../store/actions';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onLoginHandler = () => {
    const { email, password } = this.state;
    this.setState({ errors: {}, isLoading: true });
    this.props
      .LoginHandler({ email, password })
      .then(() => {
        store.dispatch(push('/dashboard/overview'));
      })
      .catch(error => {
        if (error.response === undefined) {
          // toastr.error("An error occured while submitting form.");
          this.setState({ isLoading: false });
        }
      });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-5 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <NavLink to="/" className="card-title text-center">
                  MiniAspire
                </NavLink>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      value={this.state.email}
                      onChange={this.onChange}
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      name="email"
                      required
                    />
                    <label htmlFor="inputEmail">Email</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      value={this.state.password}
                      onChange={this.onChange}
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={() => this.onLoginHandler()}
                  >
                    Login
                  </button>
                  <NavLink
                    to="/signup"
                    className="d-block text-center mt-2 small"
                  >
                    Sign Up
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  LoginHandler: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    LoginHandler: payload => dispatch(auth.login(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
