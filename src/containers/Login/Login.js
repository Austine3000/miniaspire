import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-5 mx-auto">
            <div class="card card-signin flex-row my-5">
              <div class="card-body">
                <NavLink to="/" class="card-title text-center">
                  MiniAspire
                </NavLink>
                <form class="form-signin">
                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Login
                  </button>
                  <NavLink to="/signin" class="d-block text-center mt-2 small">
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

export default Login;
