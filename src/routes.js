import React from 'react';
import { IndexRoute, Route, Switch } from 'react-router';

import App from './containers/App';
import Main from './containers/Main'
import Login from './containers/Login';



export default (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Route path='/' component={Main} />
  </Switch>
);


/*
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="/:userSlug/boards" component={BoardsContainer}></Route>
    <Route path="/:userSlug/boards/:boardSlug" component={BoardsContainer}></Route>
  </Route>
);
*/
