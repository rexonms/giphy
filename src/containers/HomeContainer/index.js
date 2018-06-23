import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingBars from './../../components/lib/LoadingBars/';
import HomeComponent from '../../components/HomeComponent/';
import * as actions from './ducks/';

const propTypes = {
  home: PropTypes.shape({
    dataReceived: PropTypes.bool,
  }),
  getTrendingGifs: PropTypes.func.isRequired,
  getSearchedGifs: PropTypes.func.isRequired,
};
const defaultProps = {
  home: {
    dataReceived: false,
  },
};

export class HomeContainer extends Component {
  componentWillMount() {
    if (!this.props.home.dataReceived) {
      this.props.getTrendingGifs();
    }
  }
  render() {
    if (!this.props.home.dataReceived) {
      return <LoadingBars />;
    }
    return (
      <HomeComponent
        {...this.props.home}
        getSearchedGifs={this.props.getSearchedGifs}
      />
    );
  }
}

HomeContainer.defaultProps = defaultProps;
HomeContainer.propTypes = propTypes;

export default connect(({ home }) => ({ home }), actions)(HomeContainer);
