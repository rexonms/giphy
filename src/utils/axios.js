import axios from 'axios';

export const foo = 'bazz';
export const getDataFromGiphy = async (url) => {
  const response = await axios.get(url);
  return response;
};

export const giphyDefaults = {
  baseURL: process.env.REACT_APP_GIPHY_BASE_URL || 'https://api.giphy.com',
  apiKey: process.env.REACT_APP_GIPHY_API_KEY || 'eazZw1kI9vdWbXRls4gVKo4LCGZQtoLb',
  limit: 25,
  rating: 'g',
  offset: 0,
  endpoints: {
    trending: 'trending',
    search: 'search',
  },
};
