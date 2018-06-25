import _uniqueBy from 'lodash.uniqby';

export const concatData = (state, payload) => {
  if (state.giphy) {
    const newPayload = JSON.parse(JSON.stringify(payload));
    const data = payload.giphy.data.concat(state.giphy.data);
    newPayload.giphy.data = _uniqueBy(data, d => d.id);
    return newPayload;
  } return payload;
};

export const f = 'd';
