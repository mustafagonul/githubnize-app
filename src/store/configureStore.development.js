import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const configureStore = (preloadedState) => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk)),
    composeEnhancers(createLogger())
  );

  return store;
}

/*
const configureStore = preloadedState => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [ thunk, createLogger(), routerMiddleware(browserHistory) ]

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}
*/

export default configureStore;
