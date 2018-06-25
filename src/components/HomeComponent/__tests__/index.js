import React from 'react';
import { shallow } from 'enzyme';

import HomeComponent from './../index';
import { giphyDefaults } from '../../../utils/axios';

describe('Welcome Component', () => {
  let props;
  let shallowHomeComponent;
  const homeComponent = () => {
    if (!shallowHomeComponent) {
      shallowHomeComponent = shallow(<HomeComponent {...props} />);
    }
    return shallowHomeComponent;
  };
  beforeEach(() => {
    props = {
      home: {
        searchBox: {
          value: '',
          buttonText: 'Search',
          placeholder: 'Start Typing',
          onSearchHandler: () => {},
        },
        giphy: {
          endpoint: {
            name: giphyDefaults.endpoints.trending,
            query: 'foo',
          },
          pagination: {
            total_count: 56795,
            count: 3,
            offset: 0,
          },
          data: [
            {
              id: 'xUOrwbGjODhnRe0ZTW',
              title: 'creepy thats my fetish GIF by NETFLIX',
              rating: 'g',
              user: {
                avatarUrl: 'https://media.giphy.com/avatars/netflix/bAiLTTOSCowX.png',
              },
              image: {
                url: {
                  url: 'https://media3.giphy.com/media/xUOrwbGjODhnRe0ZTW/200_d.gif',
                  width: '200',
                  height: '200',
                  size: '152944',
                  webp: 'https://media3.giphy.com/media/xUOrwbGjODhnRe0ZTW/200_d.webp',
                  webp_size: '49912',
                },
              },
            },
            {
              id: 'l2JJyDYEX1tXFmCd2',
              title: 'julia louis dreyfus happy dance GIF by CraveTV',
              rating: 'g',
              user: {
                avatarUrl: 'https://media.giphy.com/avatars/cravetvcanada/O77NNU18q3fH.jpg',
              },
              image: {
                url: {
                  url: 'https://media0.giphy.com/media/l2JJyDYEX1tXFmCd2/200_d.gif',
                  width: '347',
                  height: '200',
                  size: '185842',
                  webp: 'https://media0.giphy.com/media/l2JJyDYEX1tXFmCd2/200_d.webp',
                  webp_size: '58368',
                },
              },
            },
            {
              id: 'l0HlIk8EALDCUHCA8',
              title: 'high school musical summer GIF by Refinery 29 GIFs',
              rating: 'g',
              user: {
                avatarUrl: 'https://media0.giphy.com/avatars/refinery29gifs/LLnRhUU66BIl.png',
              },
              image: {
                url: {
                  url: 'https://media3.giphy.com/media/l0HlIk8EALDCUHCA8/200_d.gif',
                  width: '200',
                  height: '200',
                  size: '79257',
                  webp: 'https://media3.giphy.com/media/l0HlIk8EALDCUHCA8/200_d.webp',
                  webp_size: '51750',
                },
              },
            },
          ],
        },
      },
      getGifs: jest.fn(),
    };
    shallowHomeComponent = undefined;
  });

  it('should render previous snapshot', () => {
    expect(homeComponent()).toMatchSnapshot();
  });
  it('should render with proper className', () => {
    expect(homeComponent().find('.container').exists()).toBe(true);
    expect(homeComponent().find('.searchBox').exists()).toBe(true);
    expect(homeComponent().find('.gifs').exists()).toBe(true);
  });
  it('should have child components', () => {
    expect(homeComponent().find('SearchBox').exists()).toBe(true);
    expect(homeComponent().find('MosaicComponent').exists()).toBe(true);
  });
});
