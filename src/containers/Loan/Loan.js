import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as loanActions from '../../store/actions';
import LoanTable from '../../components/loanTable/loanTable';

import './Loan.scss';

export class Loan extends Component {
  componentWillMount() {
    this.props.onGetAllLoan();
  }

  ApproveDeclineHandler = (entry, id) => {
    const data = {
      status: entry,
      id: id
    };
    this.props.onApproveDecline(data);
  };
  render() {
    const allLoans = this.props.allLoans;
    return (
      <div>
        <h3>Loan</h3>
        <LoanTable
          allLoans={allLoans}
          ApproveDeclineHandler={this.ApproveDeclineHandler}
        />
      </div>
    );
  }
}

Loan.propTypes = {
  onGetAllLoan: PropTypes.func.isRequired,
  onApproveDecline: PropTypes.func.isRequired,
  allLoans: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    allLoans: state.loan.allLoans,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetAllLoan: () => dispatch(loanActions.getAllloans()),
    onApproveDecline: payload => dispatch(loanActions.approveDecline(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loan);
