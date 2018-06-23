import React from 'react';

import Styles from './ErrorComponent.scss';

const propTypes = {};
const defaultProps = {};

const ErrorComponent = () => (
  <div className={Styles.container}>
    <p>OMG what happen!</p>
  </div>
);

ErrorComponent.propTypes = propTypes;
ErrorComponent.defaultProps = defaultProps;

export default ErrorComponent;
