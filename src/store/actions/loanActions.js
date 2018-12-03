import * as types from './actionTypes';
import LoanApi from '../../Api/mockLoanApi';

export function getUserLoanSuccess(loan) {
  return { type: types.GET_USER_LOAN_SUCCESS, loan };
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
