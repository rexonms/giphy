import { push } from 'connected-react-router';

import { getDataFromGiphy } from '../../../utils/axios';
import { appRoutes } from '../../../Routes';
import { extractResponseInfo } from './selectors';

const initialState = {
  searchBox: {
    placeholder: 'Start Typing',
    buttonText: 'Search',
  },
};
// Actions
const SET_GIPHY_DATA = 'app/HomeContainer/SET_GIPHY_DATA';

// Reducers
const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GIPHY_DATA:
      return {
        ...state,
        dataReceived: true,
        giphy: extractResponseInfo(action.payload),
      };
    default:
      return state;
  }
};

// Action Creators
// export const setInitialArguments = initArguments => (
//   { type: SET_INIT_ARGUMENTS, payload: initArguments }
// );

// Side effects, only as applicable
// e.g. thunks, epics
export const getTrendingGifs = () => (
  async (dispatch) => {
    // const endpoint = '/myTesla';
    try {
      const endpoint = `${process.env.REACT_APP_GIPHY_BASE_URL}/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=50&rating=G`;
      const response = await getDataFromGiphy(endpoint);
      if (response.status !== 200) {
        return dispatch(push(appRoutes.error));
      }
      return dispatch({
        type: SET_GIPHY_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch(push(appRoutes.error));
      return console.log('Error', error);
    }
  }
);

export const getSearchedGifs = keyword => (
  async (dispatch) => {
    // const endpoint = '/myTesla';
    try {
      const endpoint = `${process.env.REACT_APP_GIPHY_BASE_URL}/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${keyword}&limit=50&rating=G`;
      const response = await getDataFromGiphy(endpoint);
      if (response.status !== 200) {
        return dispatch(push(appRoutes.error));
      }
      return dispatch({
        type: SET_GIPHY_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch(push(appRoutes.error));
      return console.log('Error', error);
    }
  }
);

export default reducers;
