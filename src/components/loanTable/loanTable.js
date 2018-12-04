import React from 'react';
import PropTypes from 'prop-types';

const LoanTable = props => {
  return (
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
        {props.allLoans.map((item, i) => (
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
                  onClick={() => props.ApproveDeclineHandler(true, item.id)}
                >
                  Approve
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => props.ApproveDeclineHandler(false, item.id)}
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
  );
};

LoanTable.propTypes = {
  allLoans: PropTypes.array,
  ApproveDeclineHandler: PropTypes.func
};

export default LoanTable;
