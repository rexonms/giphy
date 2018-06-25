import setPublicPath from './../publicPath';

describe('setPublicPath', () => {
  it('should default to slash', () => {
    expect(setPublicPath()).toBe('/');
  });
  it('should set the public path', () => {
    const arg = 'http://somepath.com/';
    expect(setPublicPath(arg)).toBe(arg);
  });
});
