import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './HomeComponent.scss';
import SearchBox from '../lib/SearchBox';
import MosaicContainer from '../lib/MosaicContainer';

const propTypes = {
  searchBox: PropTypes.shape({}).isRequired,
  giphy: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  getSearchedGifs: PropTypes.func.isRequired,
};

const defaultProps = {};

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    this.setState({
      bulbState: !this.state.bulbState,
    });
  }

  render() {
    const { searchBox } = this.props;
    return (
      <div className={Styles.container}>
        <div className={Styles.searchBox}>
          <SearchBox
            placeholder={searchBox.placeholder}
            buttonText={searchBox.buttonText}
            onSearchHandler={keyword => this.props.getSearchedGifs(keyword)}
          />
        </div>
        <div className={Styles.filters} />
        <div className={Styles.result}>
          <MosaicContainer gifs={this.props.giphy.data} />
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = propTypes;
HomeContainer.defaultProps = defaultProps;

export default HomeContainer;
