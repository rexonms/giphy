import { concatData } from '../selectors';

describe('concatData', () => {
  let state;
  let payload;
  beforeEach(() => {
    state = {
      giphy: {
        type: 'trending',
        query: '',
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
    };
    payload = {
      giphy: {
        type: 'search',
        query: '',
        pagination: {
          total_count: 56795,
          count: 3,
          offset: 1,
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
    };
  });
  it('should override search type', () => {
    const result = concatData(state, payload);
    expect(result.giphy.type).toBe(payload.giphy.type);
    expect(result.giphy.type).not.toBe(state.giphy.type);
  });
  it('should override offset count', () => {
    const result = concatData(state, payload);
    expect(result.giphy.pagination.offset).toBe(payload.giphy.pagination.offset);
  });
});
