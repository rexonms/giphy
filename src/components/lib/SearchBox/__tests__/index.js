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
      placeholder: 'placeholder',
      value: 'value',
      buttonText: 'Button Text',
      onSearchHandler: jest.fn(),
    };
    shallowSearchBox = undefined;
  });
  it('should match previous snapshot', () => {
    expect(searchBox()).toMatchSnapshot();
  });
});
