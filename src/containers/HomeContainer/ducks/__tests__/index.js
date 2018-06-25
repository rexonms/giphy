import { setGiphyData, initialState, SET_GIPHY_DATA } from './../index';

// test('reducers', () => {
//   const state = {
//     home: {
//       searchBox: {
//         placeholder: 'Start Typing',
//         buttonText: 'Search',
//       },
//     },
//   };
//   const action = {
//     type: 'app/HomeContainer/SET_GIPHY_DATA',
//     payload: {
//       giphy: {
//         type: 'trending',
//         query: '',
//         pagination: {
//           total_count: 56799,
//           count: 2,
//           offset: 0,
//         },
//         data: [
//           {
//             id: 'lpHGpQbVTCd7vaW2PA',
//             title: 'boom pow GIF by BBC',
//             rating: 'g',
//             user: {
//               avatarUrl: 'https://media.giphy.com/channel_assets/bbc/w9R06mXBId4p.jpg',
//             },
//             image: {
//               url: {
//                 url: 'https://media2.giphy.com/media/lpHGpQbVTCd7vaW2PA/200_d.gif',
//                 width: '200',
//                 height: '200',
//                 size: '42275',
//                 webp: 'https://media2.giphy.com/media/lpHGpQbVTCd7vaW2PA/200_d.webp',
//                 webp_size: '35866',
//               },
//             },
//           },
//           {
//             id: 'l0IyjxHHYUHvRxPxe',
//             title: 'tv land GIF by YoungerTV',
//             rating: 'g',
//             user: {
//               avatarUrl: 'https://media2.giphy.com/avatars/youngertv/5KuMj8CzqDcM.png',
//             },
//             image: {
//               url: {
//                 url: 'https://media0.giphy.com/media/l0IyjxHHYUHvRxPxe/200_d.gif',
//                 width: '269',
//                 height: '200',
//                 size: '219343',
//                 webp: 'https://media0.giphy.com/media/l0IyjxHHYUHvRxPxe/200_d.webp',
//                 webp_size: '53954',
//               },
//             },
//           },
//         ],
//       },
//     },
//   };
//   const expectedState = {
//     home: {
//       searchBox: {
//         placeholder: 'Start Typing',
//         buttonText: 'Search',
//       },
//       dataReceived: true,
//       giphy: {
//         type: 'trending',
//         query: '',
//         pagination: {
//           total_count: 56799,
//           count: 2,
//           offset: 0,
//         },
//         data: [
//           {
//             id: 'lpHGpQbVTCd7vaW2PA',
//             title: 'boom pow GIF by BBC',
//             rating: 'g',
//             user: {
//               avatarUrl: 'https://media.giphy.com/channel_assets/bbc/w9R06mXBId4p.jpg',
//             },
//             image: {
//               url: {
//                 url: 'https://media2.giphy.com/media/lpHGpQbVTCd7vaW2PA/200_d.gif',
//                 width: '200',
//                 height: '200',
//                 size: '42275',
//                 webp: 'https://media2.giphy.com/media/lpHGpQbVTCd7vaW2PA/200_d.webp',
//                 webp_size: '35866',
//               },
//             },
//           },
//           {
//             id: 'l0IyjxHHYUHvRxPxe',
//             title: 'tv land GIF by YoungerTV',
//             rating: 'g',
//             user: {
//               avatarUrl: 'https://media2.giphy.com/avatars/youngertv/5KuMj8CzqDcM.png',
//             },
//             image: {
//               url: {
//                 url: 'https://media0.giphy.com/media/l0IyjxHHYUHvRxPxe/200_d.gif',
//                 width: '269',
//                 height: '200',
//                 size: '219343',
//                 webp: 'https://media0.giphy.com/media/l0IyjxHHYUHvRxPxe/200_d.webp',
//                 webp_size: '53954',
//               },
//             },
//           },
//         ],
//       },
//     },
//     router: {
//       location: {
//         pathname: '/',
//         search: '',
//         hash: '',
//       },
//       action: 'POP',
//     },
//   };
//   const newState = reducers(state, action);
//   expect(newState).toEqual(expectedState);
// });

describe('match snapshot', () => {
  it('should match initial state state', () => {
    expect(initialState).toMatchSnapshot();
  });
  it('should match actions', () => {
    expect(SET_GIPHY_DATA).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    expect(setGiphyData()).toMatchSnapshot();
  });
});
