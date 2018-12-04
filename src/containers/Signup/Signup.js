import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store/configureStore';
import { push } from 'connected-react-router';
import * as signupActions from '../../store/actions';

class Signup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fullname: '',
      email: '',
      password: '',
      isLoading: false,
      error: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSignupHandler = this.onSignupHandler.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSignupHandler(e) {
    e.preventDefault();
    const { email, password, fullname } = this.state;
    const user = {
      fullname: fullname,
      email: email,
      password: password
    };
    this.setState({ error: '', isLoading: true });
    this.props
      .SignupHandler(user)
      .then(() => {
        store.dispatch(push('/dashboard/myloan/request'));
      })
      .catch(error => {
        this.setState({ isLoading: false, error: error });
      });
  }
  render() {
    const { error } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-5 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <NavLink to="/" className="card-title text-center">
                  MiniAspire
                </NavLink>
                {error ? (
                  <p className="server-error">{this.state.error}</p>
                ) : (
                  ''
                )}
                <form onSubmit={this.onSignupHandler} className="form-signin">
                  <div className="form-label-group">
                    <input
                      value={this.state.fullname}
                      onChange={this.onChange}
                      type="text"
                      id="inputUserame"
                      className="form-control"
                      placeholder="Full Name"
                      name="fullname"
                      required
                    />
                    <label htmlFor="inputUserame">Full Name</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      value={this.state.email}
                      onChange={this.onChange}
                      name="email"
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      value={this.state.password}
                      onChange={this.onChange}
                      name="password"
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <NavLink
                    to="/login"
                    className="d-block text-center mt-2 small"
                  >
                    Log In
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

Signup.propTypes = {
  SignupHandler: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SignupHandler: payload => dispatch(signupActions.signup(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
