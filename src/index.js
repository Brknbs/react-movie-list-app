import React from 'react';
import './scss/main.scss';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';

import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

