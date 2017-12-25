import { combineReducers } from 'redux';

import authentication from './authentication';
import tag from './tag';

const rootReducer = combineReducers({
  authentication,
  tag,
});

export default rootReducer;
