import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from './../index';

describe('SearchBox', () => {
  let props;
  let shallowSearchBox;
  const searchBox = () => {
    if (!shallowSearchBox) {
      shallowSearchBox = shallow(<SearchBox {...props} />);
    }
    return shallowSearchBox;
  };
  beforeEach(() => {
    props = {
      value: 'value',
      placeholder: 'placeholder',
      buttonText: 'Button Text',
      onSearchHandler: jest.fn(),
    };
    shallowSearchBox = undefined;
  });
  it('should match previous snapshot', () => {
    expect(searchBox()).toMatchSnapshot();
  });
  it('should render with proper className', () => {
    expect(searchBox().find('.container').exists()).toBe(true);
  });
  it('should have form tag', () => {
    expect(searchBox().find('form').exists()).toBe(true);
  });
  it('should trigger onSearchHandler when button is clicked ', () => {
    searchBox().find('button').simulate('click', { preventDefault() {} });
    expect(props.onSearchHandler).toHaveBeenCalled();
  });
  it('should trigger onSearchHandler when form is submitted', () => {
    searchBox().find('form').simulate('submit', { preventDefault() {} });
    expect(props.onSearchHandler).toHaveBeenCalled();
  });
});

