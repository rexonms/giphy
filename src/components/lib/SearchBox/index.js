import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './SearchBox.scss';

const propTypes = {
  /** Default value that will to be displayed if available */
  value: PropTypes.string,
  /** Placeholder for the input box */
  placeholder: PropTypes.string.isRequired,
  /** Search button text */
  buttonText: PropTypes.string.isRequired,
  /** Action that passes the value */
  onSearchHandler: PropTypes.func.isRequired,
};
const defaultProps = {
  value: '',
};

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onChangeHandler(e) {
    this.setState({
      value: e.target.value,
    });
  }
  onClickHandler(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.props.onSearchHandler(this.state.value);
      this.setState({ value: '' });
    }
  }
  isValid() {
    return this.state.value.length > 1;
  }
  render() {
    return (
      <form onSubmit={e => this.onChangeHandler(e)} className={Styles.container}>
        <input
          name={this.props.value}
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={e => this.onChangeHandler(e)}
        />
        <button onClick={e => this.onClickHandler(e)}>{this.props.buttonText}</button>
      </form>
    );
  }
}

SearchBox.propTypes = propTypes;
SearchBox.defaultProps = defaultProps;

export default SearchBox;
