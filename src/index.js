import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import './index.css';
import App from './App';
import history from './utils/history';
import * as serviceWorker from './serviceWorker';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App history={history} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
