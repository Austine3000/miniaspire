import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../../store/configureStore';
import { push } from 'connected-react-router';

class Signup extends Component {
  onSignupHandler = () => {
    store.dispatch(push('/dashboard/myloan/request'));
  };
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
                      type="text"
                      id="inputUserame"
                      className="form-control"
                      placeholder="Username"
                      required
                      autoFocus
                    />
                    <label htmlFor="inputUserame">Full Name</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={() => this.onSignupHandler()}
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

export default Signup;
