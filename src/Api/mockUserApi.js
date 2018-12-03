import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: '6588449493930303',
    fullname: 'Ogbuanya Austine',
    email: 'austine@gmail.com',
    password: 'password',
    role: null
  },
  {
    id: '6588449493435613',
    fullname: 'MiniAspire Admin',
    email: 'admin@gmail.com',
    password: 'password',
    role: 'admin'
  }
];

const generateId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 16);
};

class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static login(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const existingUserdetails = users.find(a => a.email === user.email);

      if (existingUserdetails === {}) {
        reject('Invalid email and password');
      } else if (existingUserdetails.password !== user.password) {
        reject('Invalid email and password');
      }

      resolve(existingUserdetails);
    });
  }

  static signup(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minLength = 6;
      const existingUserdetails = users.find(a => a.email === user.email);

      if (existingUserdetails !== undefined) {
        reject(`Email have already been used.`);
      }

      if (user.fullname.length < minLength) {
        reject(`Full name must be at least ${minLength} characters.`);
      }

      if (user.password.length < minLength) {
        reject(`Password must be at least ${minLength} characters.`);
      }

      if (user.id) {
        const existingUserIndex = users.findIndex(a => a.id === user.id);
        users.splice(existingUserIndex, 1, user);
      } else {
        //Just simulating creation here.
        //The server would generate ids for new users in a real app.
        //Cloning so copy returned is passed by value rather than by reference.
        user.id = generateId();
        user.role = null;
        users.push(user);
      }

      resolve(user);
    });
  }
}

export default UserApi;
