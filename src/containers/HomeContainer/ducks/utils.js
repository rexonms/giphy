import { giphyDefaults } from '../../../utils/axios';

export const getUrl = ({ home, endpoint }) => {
  const base = `${giphyDefaults.baseURL}/v1/gifs/${endpoint.name}`;
  const api = `api_key=${giphyDefaults.apiKey}`;
  const rating = `rating=${giphyDefaults.rating}`;
  const oldEndpointName = home.giphy && home.giphy.endpoint.name;
  let isNewEndpoint = false;
  if (oldEndpointName === undefined) {
    isNewEndpoint = true;
  }
  console.log('isNewEndpoint', isNewEndpoint);
  const offsetValue = isNewEndpoint === true ? 0 : home.giphy.pagination.offset + 1;
  const offset = `offset=${offsetValue}`;
  const url = `${base}?${api}&${rating}`;
  let limit;
  if (endpoint.name === giphyDefaults.endpoints.trending) {
    // check if there is any
    if (!home.giphy) {
      limit = `limit=${giphyDefaults.limit}`;
    } else {
      limit = `limit=${home.giphy.pagination.count + giphyDefaults.limit}`;
    }
    return `${url}&${limit}`;
  }
  console.log('offset', offset);
  console.log('endpoint', endpoint);
  return `${url}&q=${endpoint.query}`;
};

export const extractResponseInfo = (data, endpoint) => (
  {
    endpoint,
    pagination: data.pagination,
    data: data.data.map(d => (
      {
        id: d.id,
        title: d.title,
        rating: d.rating,
        user: {
          avatarUrl: d.user ? d.user.avatar_url : 'null',
        },
        image: {
          url: d.images.fixed_height_downsampled,
        },
      }
    )),
  }
);
