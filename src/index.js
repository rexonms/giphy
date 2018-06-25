import React from 'react';
import { render } from 'react-dom';

import configuredStore from './configuredStore';
import Root from './components/Root';

const store = configuredStore();

// Attach the app name to the window object so that it can be accessed from browser
window.__MY_REACT_APP__ = args => (
  render(<Root store={store} />, document.getElementById(args.divId))
);
