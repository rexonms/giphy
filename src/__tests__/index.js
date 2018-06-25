import './../index';

describe('__MY_REACT_APP__', () => {
  // const args = { divId: 'test' };
  it('should have injected to window', () => {
    expect(window.__MY_REACT_APP__).toBeDefined();
  });
  // it('should have injected to window', () => {
  //   expect(window.__MY_REACT_APP__(args)).toMatch({});
  // });
});
