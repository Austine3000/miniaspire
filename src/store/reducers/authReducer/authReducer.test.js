import reducer from './authReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthenticated: false,
      user: {}
    });
  });

  it('should store the user details upon login or signup', () => {
    expect(
      reducer(
        {
          isAuthenticated: false,
          user: {}
        },
        {
          type: actionTypes.SET_CURRENT_USER,
          user: {
            id: '6588449493930303',
            fullname: 'Ogbuanya Austine',
            email: 'austine@gmail.com',
            password: 'password',
            role: null
          }
        }
      )
    ).toEqual({
      isAuthenticated: true,
      user: {
        id: '6588449493930303',
        fullname: 'Ogbuanya Austine',
        email: 'austine@gmail.com',
        password: 'password',
        role: null
      }
    });
  });
});
