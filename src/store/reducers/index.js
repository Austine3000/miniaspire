import { combineReducers } from 'redux';
import auth from './authReducer/authReducer';
import loan from './loanReducer/loanReducer';

const rootReducer = combineReducers({
  auth,
  loan
});

export default rootReducer;
