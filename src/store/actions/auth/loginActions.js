import * as types from '../actionTypes';
import UserApi from '../../../Api/mockUserApi';
import history from '../../../utils/history';

export function setCurrentUser(user) {
  return { type: types.SET_CURRENT_USER, user };
}

export function logout() {
  return dispatch => {
    dispatch(setCurrentUser({}));
    history.push('/login');
  };
}

export function login(user) {
  return function(dispatch) {
    return UserApi.login(user)
      .then(user => {
        dispatch(setCurrentUser(user));
      })
      .catch(error => {
        throw error;
      });
  };
}
