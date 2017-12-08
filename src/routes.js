import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Login from './components/Login';

/*
export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/:user" component={Dashboard} />
  </Switch>
);
*/


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="/:userSlug/boards" component={BoardsContainer}></Route>
    <Route path="/:userSlug/boards/:boardSlug" component={BoardsContainer}></Route>
  </Route>
);
