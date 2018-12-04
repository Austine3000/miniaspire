import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as loanActions from '../../store/actions';

import './Loan.scss';

class Loan extends Component {
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

        <table className="table table-custom-border">
          <thead className="thead-light">
            <tr>
              <th>S/N</th>
              <th scope="col">Name</th>
              <th scope="col">Amount Required</th>
              <th scope="col">Amount Cleared</th>
              <th scope="col">Loan term</th>
              <th scope="col">Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {allLoans.map((item, i) => (
              <tr>
                <td>1</td>
                <td>{item.user.fullname}</td>
                <td>{item.amountRequired}</td>
                <td>{item.amountCleared}</td>
                <td>{item.loanTerm}</td>
                <td>{item.status}</td>
                {item.status === null ? (
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary btn-right-space"
                      onClick={() => this.ApproveDeclineHandler(true, item.id)}
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => this.ApproveDeclineHandler(false, item.id)}
                    >
                      Decline
                    </button>
                  </td>
                ) : (
                  <td />
                )}
              </tr>
            ))}
          </tbody>
        </table>
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
