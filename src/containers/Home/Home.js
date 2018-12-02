import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark probootstrap-navabr-dark">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              MiniAspire
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#probootstrap-nav"
              aria-controls="probootstrap-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="probootstrap-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item probootstrap-cta probootstrap-seperator">
                  <NavLink to="/signup" className="nav-link">
                    Sign up
                  </NavLink>
                </li>
                <li className="nav-item probootstrap-cta">
                  <NavLink to="/login" className="nav-link">
                    Log In
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="probootstrap-cover">
          <div className=" overlay-effect">
            <div className="container">
              <div className="row probootstrap-vh-100 align-items-center text-center">
                <div className="col-sm">
                  <div className="probootstrap-text">
                    <h1 className="probootstrap-heading text-white mb-4">
                      Get a loan in less than 5mins.
                    </h1>
                    <div className="probootstrap-subheading mb-5">
                      <p className="h4 font-weight-normal">
                        Requesting and Getting loans has never been easier.
                        Click apply below to start.
                      </p>
                    </div>
                    <p>
                      <NavLink
                        to="/signup"
                        className="btn btn-primary mr-2 mb-2"
                      >
                        Apply for a loan
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
