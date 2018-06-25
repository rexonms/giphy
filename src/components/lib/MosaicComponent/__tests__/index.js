import React from 'react';
import { shallow } from 'enzyme';

import MosaicComponent from './../index';
import { giphyDefaults } from '../../../../utils/axios';

describe('Welcome Component', () => {
  let props;
  let shallowMosaicContainer;
  const mosaicContainer = () => {
    if (!shallowMosaicContainer) {
      shallowMosaicContainer = shallow(<MosaicComponent {...props} />);
    }
    return shallowMosaicContainer;
  };
  beforeEach(() => {
    props = {
      endpoint: {
        name: giphyDefaults.endpoints.trending,
        query: 'foo',
      },
      gifs: [
        {
          id: 'l4FGqDtRMMjOKdFGU',
          title: 'tina fey shades GIF by Unbreakable Kimmy Schmidt',
          rating: 'g',
          user: {
            avatarUrl: 'https://media.giphy.com/avatars/kimmyschmidt/8Wnie77cnpH5.png',
          },
          image: {
            url: {
              url: 'https://media2.giphy.com/media/l4FGqDtRMMjOKdFGU/200_d.gif',
              width: '356',
              height: '200',
              size: '256421',
              webp: 'https://media2.giphy.com/media/l4FGqDtRMMjOKdFGU/200_d.webp',
              webp_size: '66136',
            },
          },
        },
        {
          id: 'yoJC2B1sHdXJjPTnEs',
          title: 'leonardo dicaprio omg GIF by WE tv',
          rating: 'g',
          user: {
            avatarUrl: 'https://media.giphy.com/avatars/wetv/ez6Knwamyn0A.jpg',
          },
          image: {
            url: {
              url: 'https://media3.giphy.com/media/yoJC2B1sHdXJjPTnEs/200_d.gif',
              width: '259',
              height: '200',
              size: '247691',
              webp: 'https://media3.giphy.com/media/yoJC2B1sHdXJjPTnEs/200_d.webp',
              webp_size: '58832',
            },
          },
        },
        {
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
        },
      ],
      action: jest.fn(),
    };
  });

  it('should render previous snapshot', () => {
    expect(mosaicContainer()).toMatchSnapshot();
  });
  it('should render with proper className', () => {
    expect(mosaicContainer().find('.container').exists()).toBe(true);
  });
  it('should have child components', () => {
    expect(mosaicContainer().find('GifWithInfo').exists()).toBe(true);
    expect(mosaicContainer().find('LoadingBars').exists()).not.toBe(true);
  });
});

