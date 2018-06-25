import { giphyDefaults } from '../../../utils/axios';

export const getUrl = ({ home, endpoint }) => {
  const base = `${giphyDefaults.baseURL}/v1/gifs/${endpoint.name}`;
  const api = `api_key=${giphyDefaults.apiKey}`;
  const rating = `rating=${giphyDefaults.rating}`;
  const url = `${base}?${api}&${rating}`;
  let limit = `limit=${giphyDefaults.limit}`;
  if (endpoint.name === giphyDefaults.endpoints.trending) {
    // check if there is any
    if (home.giphy) {
      limit = `limit=${home.giphy.pagination.count + giphyDefaults.limit}`;
    }
    return `${url}&${limit}`;
  }
  const offsetValue = endpoint.query === home.giphy.endpoint.query ?
    home.giphy.pagination.offset + giphyDefaults.limit + 1 : 0;
  const offset = `offset=${offsetValue}`;
  return `${url}&${limit}&${offset}&q=${endpoint.query}`;
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
