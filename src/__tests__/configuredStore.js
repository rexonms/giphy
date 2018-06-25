import configuredStore from './../configuredStore';

describe('configuredStore', () => {
  it('should create a store with routing', () => {
    expect(configuredStore().getState()).toHaveProperty('home');
  });
});
