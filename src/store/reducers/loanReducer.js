import { GET_USER_LOAN_SUCCESS } from '../actions/actionTypes';

const initialState = {
  userLoan: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_LOAN_SUCCESS:
      return {
        ...state,
        userLoan: action.loan
      };
    default:
      return state;
  }
};
