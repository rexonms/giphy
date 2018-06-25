import React from 'react';
import { shallow } from 'enzyme';

import App from './../index';

describe('Welcome Component', () => {
  let props;
  let shallowApp;
  const app = () => {
    if (!shallowApp) {
      shallowApp = shallow(<App {...props} />);
    }
    return shallowApp;
  };
  beforeEach(() => {
    props = {};
    shallowApp = undefined;
  });

  it('should render previous snapshot', () => {
    expect(app()).toMatchSnapshot();
  });
  it('should have child components', () => {
    expect(app().find('Routes').exists()).toBe(true);
  });
});
