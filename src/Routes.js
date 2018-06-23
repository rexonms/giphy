import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import LoadingBars from './components/lib/LoadingBars';

const loading = LoadingBars;

const Home = Loadable({
  loader: () => import('./containers/HomeContainer/'),
  loading,
});
const Error = Loadable({
  loader: () => import('./components/ErrorComponent/'),
  loading,
});

export const appRoutes = {
  home: '/',
  error: '/error',
};

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={appRoutes.home} component={Home} />
      <Route exact path={appRoutes.error} component={Error} />
    </Switch>
  </Router>
);

export default Routes;
