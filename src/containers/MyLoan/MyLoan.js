import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store/configureStore';
import { push } from 'connected-react-router';
import * as loanActions from '../../store/actions';
import './MyLoan.scss';

class MyLoan extends Component {
  componentWillMount() {
    this.props.onGetUserLoan(this.props.user.id);
  }

  onRequestLoanHandler = () => {
    store.dispatch(push('/dashboard/myloan/request'));
  };

  render() {
    const userLoan = this.props.userLoan;
    return (
      <div>
        <h3>My Loan</h3>
        <button
          onClick={() => this.onRequestLoanHandler()}
          type="button"
          className="btn btn-primary"
        >
          Request for a loan
        </button>

        <p>
          You haven't requested for a loan. Please click on the request button
          above.
        </p>

        <table className="table table-custom-border">
          <thead className="thead-light">
            <tr>
              <th scope="col">Amount Requested</th>
              <th scope="col">Amount Cleared</th>
              <th scope="col">Loan term</th>
              <th scope="col">Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userLoan.amountRequired}</td>
              <td>{userLoan.amountCleared}</td>
              <td>{userLoan.loanTerm}</td>
              <td>{userLoan.status}</td>
              <td>
                <button type="button" className="btn btn-success">
                  Repay
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

MyLoan.propTypes = {
  onGetUserLoan: PropTypes.func.isRequired,
  userLoan: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    userLoan: state.loan.userLoan,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetUserLoan: id => dispatch(loanActions.getUserLoan(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyLoan);
