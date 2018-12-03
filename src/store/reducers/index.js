import { combineReducers } from 'redux';
import auth from './loginReducer';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;
