import * as types from '../actionTypes';
import LoanApi from '../../../Api/mockLoanApi';

export function getUserLoanSuccess(loan) {
  return { type: types.GET_USER_LOAN_SUCCESS, loan };
}

export function getAllLoansSuccess(loans) {
  return { type: types.GET_ALL_LOAN_SUCCESS, loans };
}

export function approveDeclineSuccess(loan) {
  return { type: types.APPROVE_DECLINE_SUCCESS, loan };
}

export function repayLoanSuccess(loan) {
  return { type: types.REPAY_LOAN_SUCCESS, loan };
}

export function getUserLoan(userId) {
  return function(dispatch) {
    return LoanApi.getUserLoan(userId)
      .then(loan => {
        dispatch(getUserLoanSuccess(loan));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loanRequest(loan) {
  return function(dispatch) {
    return LoanApi.loanRequest(loan)
      .then(loan => {})
      .catch(error => {
        throw error;
      });
  };
}

export function getAllloans() {
  return function(dispatch) {
    return LoanApi.getAllloans()
      .then(loans => {
        dispatch(getAllLoansSuccess(loans));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function approveDecline(data) {
  return function(dispatch) {
    return LoanApi.approveDecline(data)
      .then(loans => {
        dispatch(approveDeclineSuccess(loans));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function repayLoan(id) {
  return function(dispatch) {
    return LoanApi.rePayLoan(id)
      .then(loan => {
        dispatch(repayLoanSuccess(loan));
      })
      .catch(error => {
        throw error;
      });
  };
}
