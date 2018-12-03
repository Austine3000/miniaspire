import { combineReducers } from 'redux';
import auth from './loginReducer';
import loan from './loanReducer';

const rootReducer = combineReducers({
  auth,
  loan
});

export default rootReducer;
