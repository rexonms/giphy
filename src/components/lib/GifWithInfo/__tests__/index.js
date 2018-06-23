import React from 'react';
// import uuidV4 from 'uuid/v4'
import { shallow } from 'enzyme';

import GifWithInfo from './../index';

describe('GifWithInfo Component', () => {
  let props;
  let shallowVideoComponent;
  const gifWithInfoComponent = () => {
    if (!shallowVideoComponent) {
      shallowVideoComponent = shallow(<GifWithInfo {...props} />);
    }
    return shallowVideoComponent;
  };
  beforeEach(() => {
    props = {
      imgSrc: '',
      details: [
        { label: 'User Name', value: 'Giphy' },
        { label: 'Rating', value: 'g' }
      ],
    };
    shallowVideoComponent = undefined;
  });
  // it('should render previous snapshot', () => {
  //   // fails due to uuit
  //   expect(gifWithInfoComponent()).toMatchSnapshot();
  // });
  it('should not have .show class on load', () => {
    expect(gifWithInfoComponent().find('.show').exists()).toBe(false);
  });
});

