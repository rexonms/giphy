import { combineReducers } from 'redux';

import home from './containers/HomeContainer/ducks/';

const createReducer = asyncReducers => (
  combineReducers({
    home,
    ...asyncReducers,
  })
);

export default createReducer;
