import * as ducks from './../index';

describe('setInitialArguments()', () => {
  it('should match snapshot', () => {
    expect(ducks.setInitialArguments()).toMatchSnapshot();
  });
});

describe('getGifs()', () => {
  it('should match snapshot', () => {
    expect(ducks.getGifs()).toMatchSnapshot();
  });
});
