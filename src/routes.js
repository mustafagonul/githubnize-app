import React from 'react';
import { Switch, Route } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Login from './components/Login';


export default (
  <Switch>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/:user" component={Dashboard} />
  </Switch>
);
