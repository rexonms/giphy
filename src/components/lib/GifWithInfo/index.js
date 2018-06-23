import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './GifWithInfo.scss';

const propTypes = {
  image: PropTypes.shape({
    url: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

const defaultProps = {};

class GifWithInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
    this.getClassName = this.getClassName.bind(this);
  }
  getClassName() {
    return this.state.showDetails === true ? `${Styles.imgDetails} ${Styles.show}` : Styles.imgDetails;
  }

  render() {
    return (
      <div
        className={Styles.container}
        onMouseEnter={() => this.setState({ showDetails: true })}
        onMouseLeave={() => this.setState({ showDetails: false })}
      >
        <div className={Styles.img}>
          <img src={this.props.image.url.url} alt={this.props.title} />
        </div>
        <div className={this.getClassName()}>
          <div>
            <p>{this.props.title}</p>
            <p>{this.props.rating}</p>
          </div>
        </div>
      </div>
    );
  }
}

GifWithInfo.propTypes = propTypes;
GifWithInfo.defaultProps = defaultProps;

export default GifWithInfo;
