const setPublicPath = (publicPath = '/') => {
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line
    __webpack_public_path__ = `${publicPath}/` || '/';
  }
  return publicPath; // returning value for testing purpose only
};

export default setPublicPath;
