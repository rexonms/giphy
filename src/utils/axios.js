import axios from 'axios';

export const foo = 'bazz';
export const getDataFromGiphy = async (url) => {
  const response = await axios.get(url);
  return response;
};

export const giphyDefaults = {
  baseURL: process.env.REACT_APP_GIPHY_BASE_URL,
  apiKey: process.env.REACT_APP_GIPHY_API_KEY,
  limit: 25,
  rating: 'g',
  offset: 0,
  endpoints: {
    trending: 'trending',
    search: 'search',
  },
};
