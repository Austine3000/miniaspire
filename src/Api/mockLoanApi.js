import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const loans = [
  {
    id: '6588449493903',
    amountRequired: 23000,
    amountCleared: 0,
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
      setTimeout(() => {
        resolve(Object.assign([], loans));
      }, delay);
    });
  }

  static approveDecline(approveDecline) {
    approveDecline = Object.assign({}, approveDecline); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const existingUserdetails = loans.find(a => a.id === approveDecline.id);

      if (existingUserdetails === {}) {
        reject('Invalid email and password');
      } else if (existingUserdetails.password !== approveDecline.password) {
        reject('Invalid email and password');
      }

      resolve(existingUserdetails);
    });
  }

  static getUserLoan(id) {
    return new Promise((resolve, reject) => {
      let existingUserLoan = loans.find(a => a.user.userId === id);

      if (existingUserLoan === undefined) {
        existingUserLoan = {};
        resolve(existingUserLoan);
      }

      resolve(existingUserLoan);
    });
  }

  static loanRequest(loan) {
    loan = Object.assign({}, loan); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minLength = 6;
      const existingUserdetails = loans.find(a => a.email === loan.email);

      if (existingUserdetails !== undefined) {
        reject(`Email have already been used.`);
      }

      if (loan.fullname.length < minLength) {
        reject(`Full name must be at least ${minLength} characters.`);
      }

      if (loan.password.length < minLength) {
        reject(`Password must be at least ${minLength} characters.`);
      }

      if (loan.id) {
        const existingUserIndex = loans.findIndex(a => a.id === loan.id);
        loans.splice(existingUserIndex, 1, loan);
      } else {
        //Just simulating creation here.
        //The server would generate ids for new users in a real app.
        //Cloning so copy returned is passed by value rather than by reference.
        loan.id = generateId();
        loan.role = null;
        loans.push(loan);
      }

      resolve(loan);
    });
  }
}

export default LoanApi;
