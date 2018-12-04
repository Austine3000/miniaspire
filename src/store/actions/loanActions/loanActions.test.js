import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as loanActions from './loanActions';
import * as types from '../ActionTypes';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates GET_USER_LOAN_SUCCESS  when get user loan has been done', () => {
    fetchMock.getOnce('/getUserLoan', {
      loan: [
        {
          id: '6588449493903',
          amountRequired: 20000,
          amountCleared: 0,
          weeklyPay: 1000,
          loanTerm: 20,
          status: 'Approved',
          user: {
            userId: '6588449493930303',
            fullname: 'Ogbuanya Austine'
          }
        }
      ]
    });

    const expectedActions = [
      {
        type: types.GET_USER_LOAN_SUCCESS,
        loan: [
          {
            id: '6588449493903',
            amountRequired: 20000,
            amountCleared: 0,
            weeklyPay: 1000,
            loanTerm: 20,
            status: 'Approved',
            user: {
              userId: '6588449493930303',
              fullname: 'Ogbuanya Austine'
            }
          }
        ]
      }
    ];
    const store = mockStore({});

    return store
      .dispatch(loanActions.getUserLoan('6588449493930303'))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates GET_ALL_LOAN_SUCCESS  when get user loan has been done', () => {
    fetchMock.getOnce('/getAllloans', {
      loan: [
        {
          id: '6588449493903',
          amountRequired: 20000,
          amountCleared: 0,
          weeklyPay: 1000,
          loanTerm: 20,
          status: 'Approved',
          user: {
            userId: '6588449493930303',
            fullname: 'Ogbuanya Austine'
          }
        }
      ]
    });

    const expectedActions = [
      {
        type: types.GET_ALL_LOAN_SUCCESS,
        loans: [
          {
            id: '6588449493903',
            amountRequired: 20000,
            amountCleared: 0,
            weeklyPay: 1000,
            loanTerm: 20,
            status: 'Approved',
            user: {
              userId: '6588449493930303',
              fullname: 'Ogbuanya Austine'
            }
          }
        ]
      }
    ];
    const store = mockStore({});

    return store.dispatch(loanActions.getAllloans()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates APPROVE_DECLINE_SUCCESS  when get user loan has been done', () => {
    fetchMock.getOnce('/approveDecline', {
      user: {
        id: '6588449493903',
        amountRequired: 20000,
        amountCleared: 0,
        weeklyPay: 1000,
        loanTerm: 20,
        status: 'Approved',
        user: {
          userId: '6588449493930303',
          fullname: 'Ogbuanya Austine'
        }
      }
    });

    const expectedActions = [
      {
        type: types.APPROVE_DECLINE_SUCCESS,
        loan: {
          id: '6588449493903',
          amountRequired: 20000,
          amountCleared: 0,
          weeklyPay: 1000,
          loanTerm: 20,
          status: 'Approved',
          user: {
            userId: '6588449493930303',
            fullname: 'Ogbuanya Austine'
          }
        }
      }
    ];
    const store = mockStore({});

    return store
      .dispatch(
        loanActions.approveDecline({ id: '6588449493903', status: true })
      )
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
