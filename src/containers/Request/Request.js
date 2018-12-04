import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store/configureStore';
import { push } from 'connected-react-router';
import * as loanActions from '../../store/actions';

import './Request.scss';

class Request extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      amountRequired: '',
      loanTerm: '',
      isLoading: false,
      dErrors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onRequestHandler = this.onRequestHandler.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onRequestHandler(e) {
    e.preventDefault();
    const { loanTerm, amountRequired } = this.state;
    const loan = {
      amountRequired: amountRequired,
      loanTerm: loanTerm,
      user: {
        userId: this.props.user.id,
        fullname: this.props.user.fullname
      }
    };
    this.setState({ dErrors: {}, isLoading: true });
    this.props
      .loanRequestHandler(loan)
      .then(() => {
        store.dispatch(push('/dashboard/myloan'));
      })
      .catch(error => {
        if (error.response === undefined) {
          // toastr.error("An error occured while submitting form.");
          this.setState({ isLoading: false });
        }
      });
  }
  render() {
    return (
      <div>
        <h3>Request</h3>
        <form onSubmit={this.onRequestHandler}>
          <h1>Fill the form below to request for a loan.</h1>
          <div className="contentform">
            <div id="sendmessage">
              {' '}
              Your message has been sent successfully. Thank you.{' '}
            </div>

            <div className="leftcontact">
              <div className="form-group">
                <p>
                  Loan term <span>*</span>
                </p>
                <input
                  loanTerm={this.state.loanTerm}
                  onChange={this.onChange}
                  type="number"
                  name="loanTerm"
                  id="loanTerm"
                  data-rule="loanTerm"
                  placeholder="Enter loan term"
                />
                <div className="validation" />
              </div>
            </div>

            <div className="rightcontact">
              <div className="form-group">
                <p>
                  Amount Required <span>*</span>
                </p>
                <input
                  value={this.state.amountRequired}
                  onChange={this.onChange}
                  type="text"
                  name="amountRequired"
                  id="amountRequired"
                  data-rule="maxlen:10"
                  placeholder="Enter amount required."
                />
                <div className="validation" />
              </div>
            </div>
          </div>
          <button type="submit" className="bouton-contact">
            Request
          </button>
        </form>
      </div>
    );
  }
}

Request.propTypes = {
  user: PropTypes.object.isRequired,
  loanRequestHandler: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loanRequestHandler: payload => dispatch(loanActions.loanRequest(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Request);
