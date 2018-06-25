import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './MosaicComponent.scss';
import GifWithInfo from '../GifWithInfo';
import LoadingBars from '../LoadingBars';

const propTypes = {
  /** Array of gifs to display */
  gifs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  /** Tells what type of query is currently visible in the mosasic */
  endpoint: PropTypes.shape({
    name: PropTypes.string.isRequired,
    query: PropTypes.string,
  }).isRequired,
  /** Action that needs to be triggered for lazy loading */
  action: PropTypes.func.isRequired,
};

const defaultProps = {};

class MosaicComponent extends Component {
  constructor() {
    super();
    this.state = {
      fetching: false,
    };
    this.handleOnScroll = this.handleOnScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }
  componentWillReceiveProps() {
    // Making sure the action is called only every second
    setTimeout(() => {
      this.setState({ fetching: false });
    }, 1000);
  }
  handleOnScroll() {
    // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    const docEl = document.documentElement;
    const scrollTop = (docEl && docEl.scrollTop) || document.body.scrollTop;
    const scrollHeight = (docEl && docEl.scrollHeight) || document.body.scrollHeight;
    const clientHeight = docEl.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom && !this.state.fetching) {
      this.props.action(this.props.endpoint);
      this.setState({ fetching: true });
    }
  }
  render() {
    return (
      <div className={`${Styles.container}`}>
        <div className={Styles.gifs}>
          {this.props.gifs.map(gif => <GifWithInfo key={gif.id} {...gif} />)}
        </div>
        {this.state.fetching &&
          <LoadingBars />
        }
      </div>
    );
  }
}

MosaicComponent.propTypes = propTypes;
MosaicComponent.defaultProps = defaultProps;

export default MosaicComponent;
