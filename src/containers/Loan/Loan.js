import React, { Component } from 'react';

import './Loan.scss';

class Template extends Component {
  render() {
    return (
      <div>
        <h3>Loan</h3>

        <table className="table table-custom-border">
          <thead className="thead-light">
            <tr>
              <th>S/N</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Loan term</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>50,000</td>
              <td>2 years</td>
              <td>
                <button type="button" class="btn btn-primary btn-right-space">
                  Approve
                </button>
                <button type="button" class="btn btn-danger">
                  Decline
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Template;
