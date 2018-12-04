import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as loginActions from './loginActions';
import * as signupActions from './signupActions';
import * as types from '../ActionTypes';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SET_CURRENT_USER  when login has been done', () => {
    fetchMock.getOnce('/login', {
      user: {
        id: '6588449493930303',
        fullname: 'Ogbuanya Austine',
        email: 'austine@gmail.com',
        password: 'password',
        role: null
      }
    });

    const expectedActions = [
      {
        type: types.SET_CURRENT_USER,
        user: {
          id: '6588449493930303',
          fullname: 'Ogbuanya Austine',
          email: 'austine@gmail.com',
          password: 'password',
          role: null
        }
      }
    ];
    const store = mockStore({});

    return store
      .dispatch(
        loginActions.login({ email: 'austine@gmail.com', password: 'password' })
      )
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
