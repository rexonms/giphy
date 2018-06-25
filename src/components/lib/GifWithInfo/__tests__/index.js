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
      id: 'b1YFCoOD2aX2E',
      title: 'frances mcdormand smiling GIF by Maudit',
      rating: 'g',
      user: {
        avatarUrl: 'https://media0.giphy.com/avatars/maudit.gif',
      },
      image: {
        url: {
          url: 'https://media2.giphy.com/media/b1YFCoOD2aX2E/200_d.gif',
          width: '345',
          height: '200',
          size: '353795',
          webp: 'https://media2.giphy.com/media/b1YFCoOD2aX2E/200_d.webp',
          webp_size: '102774',
        },
      },
    };
    shallowVideoComponent = undefined;
  });
  it('should render previous snapshot', () => {
    expect(gifWithInfoComponent()).toMatchSnapshot();
  });
  it('should not have .show class on load', () => {
    expect(gifWithInfoComponent().find('.show').exists()).toBe(false);
  });
});

