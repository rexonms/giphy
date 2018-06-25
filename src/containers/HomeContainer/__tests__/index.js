import React from 'react';
import { shallow } from 'enzyme';

import ConnectedHomeContainer, { HomeContainer } from './../index';
import configuredStore from './../../../configuredStore';

describe('HomeContainer container', () => {
  let props;
  let shallowHomeContainer;
  const homeContainer = () => {
    if (!shallowHomeContainer) {
      shallowHomeContainer = shallow(<HomeContainer {...props} />);
    }
    return shallowHomeContainer;
  };
  beforeEach(() => {
    props = {
      home: {},
      getGifs: jest.fn(),
    };
    shallowHomeContainer = undefined;
  });
  it('should match the previous snapshot', () => {
    expect(homeContainer()).toMatchSnapshot();
  });
  it('should trigger componentWillMount', () => {
    jest.spyOn(HomeContainer.prototype, 'componentWillMount');
    homeContainer();
    expect(HomeContainer.prototype.componentWillMount.mock.calls.length).toBe(1);
  });
});

describe('Connected HomeContainer container', () => {
  const props = {
    welcome: {},
    getGifs: jest.fn(),
  };
  const wrapper = shallow(<ConnectedHomeContainer {...props} store={configuredStore()} />).dive();
  expect(wrapper).toMatchSnapshot();
});
