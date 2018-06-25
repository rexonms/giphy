import { push } from 'connected-react-router';

import { getDataFromGiphy } from '../../../utils/axios';
import { appRoutes } from '../../../Routes';
import { concatData } from './selectors';
import { getUrl, extractResponseInfo } from './utils';

export const initialState = {
  searchBox: {
    placeholder: 'Start Typing',
    buttonText: 'Search',
  },
};
// Actions
export const SET_GIPHY_DATA = 'app/HomeContainer/SET_GIPHY_DATA';

// Reducers
const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GIPHY_DATA:
      return {
        ...state,
        dataReceived: true,
        ...concatData(state, action.payload),
      };
    default:
      return state;
  }
};

// Action Creators
export const setGiphyData = payload => ({ type: SET_GIPHY_DATA, payload });

// Side effects, only as applicable
// e.g. thunks, epics
export const getGifs = endpoint => (
  async (dispatch, getState) => {
    console.log('endpoint', endpoint);
    const { home } = getState();
    const url = getUrl({ home, endpoint });
    try {
      const response = await getDataFromGiphy(url);
      if (response.status !== 200) {
        return dispatch(push(appRoutes.error));
      }
      return dispatch(setGiphyData({
        giphy: extractResponseInfo(response.data, endpoint),
      }));
    } catch (error) {
      dispatch(push(appRoutes.error));
      return console.log('Error', error);
    }
  }
);


export default reducers;
