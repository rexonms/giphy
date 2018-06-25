import React from 'react';

import Styles from './ErrorComponent.scss';

const propTypes = {};
const defaultProps = {};

const ErrorComponent = () => (
  <div className={Styles.container}>
    <img src="https://media2.giphy.com/media/5nj4KLBy2mhkH1pUWT/200_d.gif" alt="default error gif" />
  </div>
);

ErrorComponent.propTypes = propTypes;
ErrorComponent.defaultProps = defaultProps;

export default ErrorComponent;
