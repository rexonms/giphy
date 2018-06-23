import React from 'react';
import { shallow } from 'enzyme';

import MosaicContainer from '../index';
import Styles from '../MosaicContainer.scss';

describe('MosaicContainer Component', () => {
const props = {
  vehicle: 'Model S',
  count: 1,
};  const wrapper = shallow(<MosaicContainer {...props} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.vehicle)).toBe(true);
  });
});
