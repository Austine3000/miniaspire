import reducer from './loanReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('loan reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      userLoan: [],
      allLoans: []
    });
  });

  it('should store a user loan details', () => {
    expect(
      reducer(
        {
          userLoan: [],
          allLoans: []
        },
        {
          type: actionTypes.GET_USER_LOAN_SUCCESS,
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
      )
    ).toEqual({
      allLoans: [],
      userLoan: [
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
  });

  it('should store all user loan details', () => {
    expect(
      reducer(
        {
          userLoan: [],
          allLoans: []
        },
        {
          type: actionTypes.GET_ALL_LOAN_SUCCESS,
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
      )
    ).toEqual({
      userLoan: [],
      allLoans: [
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
  });

  it('should update loan status Approve or decline', () => {
    expect(
      reducer(
        {
          userLoan: [],
          allLoans: [
            {
              id: '6588449493903',
              amountRequired: 20000,
              amountCleared: 0,
              weeklyPay: 1000,
              loanTerm: 20,
              status: null,
              user: {
                userId: '6588449493930303',
                fullname: 'Ogbuanya Austine'
              }
            }
          ]
        },
        {
          type: actionTypes.APPROVE_DECLINE_SUCCESS,
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
      )
    ).toEqual({
      userLoan: [],
      allLoans: [
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
  });

  it('should update updated loan repayment', () => {
    expect(
      reducer(
        {
          userLoan: [],
          allLoans: [
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
        },
        {
          type: actionTypes.REPAY_LOAN_SUCCESS,
          loan: {
            id: '6588449493903',
            amountRequired: 20000,
            amountCleared: 1000,
            weeklyPay: 1000,
            loanTerm: 20,
            status: 'Approved',
            user: {
              userId: '6588449493930303',
              fullname: 'Ogbuanya Austine'
            }
          }
        }
      )
    ).toEqual({
      userLoan: [],
      allLoans: [
        {
          id: '6588449493903',
          amountRequired: 20000,
          amountCleared: 1000,
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
  });
});
