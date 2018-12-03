import React, { Component } from 'react';
import store from '../../store/configureStore';
import { push } from 'connected-react-router';
import './MyLoan.scss';

class MyLoan extends Component {
  onRequestLoanHandler = () => {
    store.dispatch(push('/dashboard/myloan/request'));
  };

  render() {
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
              <td>40,000</td>
              <td>0.00</td>
              <td>2 years</td>
              <td>Approved</td>
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

export default MyLoan;
