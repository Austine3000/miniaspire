// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let loans = [
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
];

const generateId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 16);
};

class LoanApi {
  static getAllloans() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], loans));
    });
  }

  static approveDecline(approveDecline) {
    return new Promise((resolve, reject) => {
      const existingUserdetails = loans.find(a => a.id === approveDecline.id);

      if (existingUserdetails === undefined) {
        reject("Loan doesn't not exist");
      } else {
        loans = loans.map(e => {
          if (e.id === approveDecline.id) {
            e = {
              ...e,
              status: approveDecline.status ? 'Approved' : 'Declined'
            };
          }
          return e;
        });
      }

      existingUserdetails.status = approveDecline.status
        ? 'Approved'
        : 'Declined';

      resolve(existingUserdetails);
    });
  }

  static rePayLoan(id) {
    return new Promise((resolve, reject) => {
      let existingUserdetails = loans.find(a => a.id === id);

      if (existingUserdetails === undefined) {
        reject("Loan doesn't not exist");
      } else {
        loans = loans.map(e => {
          if (e.id === id && e.amountCleared < e.amountRequired) {
            const newAmountCleared = e.amountCleared + e.weeklyPay;
            e = {
              ...e,
              amountCleared: newAmountCleared
            };

            existingUserdetails = e;
          }

          return e;
        });
      }

      resolve(existingUserdetails);
    });
  }

  static getUserLoan(id) {
    return new Promise((resolve, reject) => {
      let existingUserLoan = loans.filter(a => a.user.userId === id);

      if (existingUserLoan === []) {
        existingUserLoan = [];
        resolve(existingUserLoan);
      }

      resolve(existingUserLoan);
    });
  }

  static loanRequest(loan) {
    loan = Object.assign({}, loan); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      if (Number(loan.amountRequired) < 1000) {
        reject(`Amount must be above 1000 SGD`);
      }

      if (Number(loan.loanTerm) < 1) {
        reject(`Loan term should be at least a week.`);
      }

      if (loan.id) {
        const existingUserIndex = loans.findIndex(a => a.id === loan.id);
        loans.splice(existingUserIndex, 1, loan);
      } else {
        //Just simulating creation here.
        //The server would generate ids for new users in a real app.
        //Cloning so copy returned is passed by value rather than by reference.
        loan.id = generateId();
        loan.amountCleared = 0;
        loan.weeklyPay = Math.ceil(loan.amountRequired / loan.loanTerm);
        loan.status = null;
        loans.push(loan);
      }

      resolve(loan);
    });
  }
}

export default LoanApi;
