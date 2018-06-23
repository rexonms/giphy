import { createStore, compose, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createReducer from './reducers';

export const history = createHistory();

function configuredStore(initialState = undefined) {
  const composeEnhancers = process.env.NODE_ENV !== 'production ' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
  const store = createStore(
    connectRouter(history)(createReducer()),
    initialState,
    composeEnhancers(applyMiddleware(
      routerMiddleware(history),
      thunk,
    )),
  );
  store.asyncReducers = {};
  return store;
}

export default configuredStore;
