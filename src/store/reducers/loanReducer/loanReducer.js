import {
  GET_USER_LOAN_SUCCESS,
  GET_ALL_LOAN_SUCCESS,
  APPROVE_DECLINE_SUCCESS,
  REPAY_LOAN_SUCCESS
} from '../../actions/actionTypes';

const initialState = {
  userLoan: [],
  allLoans: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_LOAN_SUCCESS:
      return {
        ...state,
        userLoan: action.loan
      };
    case GET_ALL_LOAN_SUCCESS:
      return {
        ...state,
        allLoans: action.loans
      };
    case APPROVE_DECLINE_SUCCESS:
      return {
        ...state,
        allLoans: [
          ...state.allLoans.filter(loan => loan.id !== action.loan.id),
          Object.assign({}, action.loan)
        ]
      };
    case REPAY_LOAN_SUCCESS:
      return {
        ...state,
        userLoan: [
          ...state.userLoan.filter(loan => loan.id !== action.loan.id),
          Object.assign({}, action.loan)
        ]
      };
    default:
      return state;
  }
};
