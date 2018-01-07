import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store/configureStore';
import api from './configs/api';
import App from './containers/App'

import 'normalize.css';
import './style.css';


injectTapEventPlugin();


const api_token = localStorage.getItem('api_token');
const github_token = localStorage.getItem('github_token');
const user = localStorage.getItem('user');


const store = configureStore({
  authentication: fromJS({
    loading: false,
    valid: false,
    error: null,
    api_token: api_token,
    github_token: github_token,
    user: user
  }),
  tag: fromJS({
    loading: false,
    error: null,

    allstars: false,
    untagged: false,
    currentTag: null,

    currentRepo: null,
  })
});


if (api_token) {
  api.api_token = api_token;
}

if (github_token) {
  api.github_token = github_token;
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
