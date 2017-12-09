import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { fromJS } from 'immutable';

import injectTapEventPlugin from 'react-tap-event-plugin';
import createHistory from 'history/createBrowserHistory';

import routes from './routes';
import configureStore from './store/configureStore';

import api from './configs/api';

import 'normalize.css';
import './style.css';


injectTapEventPlugin();


const token = localStorage.getItem('token');
const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

const history = createHistory();


const store = configureStore({
  authentication: fromJS({
    loading: false,
    valid: false,
    error: null,
    token: token,
    user: user
  })
}, history);


if (token) {
  api.token = token;
}


render(
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>,
  document.getElementById('root')
);
