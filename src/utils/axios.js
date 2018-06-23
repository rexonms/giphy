import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_GIPHY_BASE_URL;

export const foo = 'bazz';
export const getDataFromGiphy = async (url) => {
  const response = await axios.get(url);
  return response;
};
