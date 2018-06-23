import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../../configuredStore';
import Routes from '../../Routes';
import Styles from './App.scss';
import packageJson from '../../../package.json';

const propTypes = {};
const defaultProps = {};
const App = () => (
  <div className={Styles.container} bundleversion={packageJson.version}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </div>
);

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
