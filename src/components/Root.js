import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from './App/';

const propTypes = {
  store: PropTypes.shape({}).isRequired,
};

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
