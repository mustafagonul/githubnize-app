import { combineReducers } from 'redux';

import authentication from './authentication';

const rootReducer = combineReducers({
  authentication,
  // users,
});

export default rootReducer;
