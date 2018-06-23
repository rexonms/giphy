import React from 'react';
import PropTypes from 'prop-types';

import Styles from './MosaicContainer.scss';
import GifWithInfo from '../GifWithInfo';

const propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const defaultProps = {};

const MosaicContainer = ({ gifs }) => (
  <div className={`${Styles.container}`}>
    {gifs.map(gif => <GifWithInfo {...gif} />)}
  </div>
);

MosaicContainer.propTypes = propTypes;
MosaicContainer.defaultProps = defaultProps;

export default MosaicContainer;
