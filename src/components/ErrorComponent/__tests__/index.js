import React from 'react';
import { shallow } from 'enzyme';

import ErrorComponent from './../index';

describe('Error Component', () => {
  let props;
  let shallowErrorComponent;
  const errorComponent = () => {
    if (!shallowErrorComponent) {
      shallowErrorComponent = shallow(<ErrorComponent {...props} />);
    }
    return shallowErrorComponent;
  };
  beforeEach(() => {
    props = {};
    shallowErrorComponent = undefined;
  });

  it('should render previous snapshot', () => {
    expect(errorComponent()).toMatchSnapshot();
  });
});
