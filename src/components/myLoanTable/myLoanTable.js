import React from 'react';
import PropTypes from 'prop-types';

const MyLoanTable = props => {
  return (
    <table className="table table-custom-border">
      <thead className="thead-light">
        <tr>
          <th scope="col">Amount Requested</th>
          <th scope="col">Amount Cleared</th>
          <th scope="col">Loan term</th>
          <th scope="col">Status</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {props.userLoan.map((item, i) => (
          <tr key={i}>
            <td>{item.amountRequired}</td>
            <td>{item.amountCleared}</td>
            <td>{item.loanTerm}</td>
            <td>
              {item.status === null ? 'Waiting for confirmation' : item.status}
            </td>
            {item.amountCleared >= item.amountRequired ? (
              <td>Cleared</td>
            ) : (
              <td />
            )}
            {item.amountCleared < item.amountRequired &&
            item.status === 'Approved' ? (
              <td>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => props.onRepayLoanHandler(item.id)}
                >
                  Repay
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

MyLoanTable.propTypes = {
  userLoan: PropTypes.array,
  onRepayLoanHandler: PropTypes.func
};

export default MyLoanTable;
