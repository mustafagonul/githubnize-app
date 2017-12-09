import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authentication from './authentication';

const rootReducer = combineReducers({
  authentication,
  // users,
  router: routerReducer
});

export default rootReducer;
