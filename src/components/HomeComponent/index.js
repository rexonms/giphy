import React from 'react';
import PropTypes from 'prop-types';

import Styles from './HomeComponent.scss';
import SearchBox from '../lib/SearchBox';
import MosaicComponent from '../lib/MosaicComponent';

const propTypes = {
  home: PropTypes.shape({
    searchBox: PropTypes.shape({}).isRequired,
    giphy: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      endpoint: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  getGifs: PropTypes.func.isRequired,
};

const defaultProps = {};

const HomeComponent = (props) => {
  const { searchBox } = props.home;
  return (
    <div className={Styles.container}>
      <div className={Styles.searchBox}>
        <SearchBox
          placeholder={searchBox.placeholder}
          buttonText={searchBox.buttonText}
          onSearchHandler={endpoint => props.getGifs(endpoint)}
        />
      </div>
      <div className={Styles.filters} />
      <div className={Styles.gifs}>
        <MosaicComponent
          endpoint={props.home.giphy.endpoint}
          gifs={props.home.giphy.data}
          action={endpoint => props.getGifs(endpoint)}
        />
      </div>
    </div>
  );
};

HomeComponent.propTypes = propTypes;
HomeComponent.defaultProps = defaultProps;

export default HomeComponent;
