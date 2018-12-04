import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store/configureStore';
import { push } from 'connected-react-router';
import * as loanActions from '../../store/actions';
import MyLoanTable from '../../components/myLoanTable/myLoanTable';

import './MyLoan.scss';

export class MyLoan extends Component {
  componentWillMount() {
    this.props.onGetUserLoan(this.props.user.id);
  }

  onRequestLoanHandler = () => {
    store.dispatch(push('/dashboard/myloan/request'));
  };

  onRepayLoanHandler = id => {
    this.props.RepayLoanHandler(id);
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
        <MyLoanTable
          userLoan={userLoan}
          onRepayLoanHandler={this.onRepayLoanHandler}
        />
      </div>
    );
  }
}

MyLoan.propTypes = {
  onGetUserLoan: PropTypes.func.isRequired,
  userLoan: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  RepayLoanHandler: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    userLoan: state.loan.userLoan,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetUserLoan: id => dispatch(loanActions.getUserLoan(id)),
    RepayLoanHandler: id => dispatch(loanActions.repayLoan(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyLoan);
