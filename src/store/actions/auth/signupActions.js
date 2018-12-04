import * as types from '../actionTypes';
import UserApi from '../../../Api/mockUserApi';

export function setCurrentUser(user) {
  return { type: types.SET_CURRENT_USER, user };
}

export function signup(user) {
  return function(dispatch) {
    return UserApi.signup(user)
      .then(user => {
        dispatch(setCurrentUser(user));
      })
      .catch(error => {
        throw error;
      });
  };
}
