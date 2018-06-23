import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import SearchBox from './index';

const stories = storiesOf('lib/SearchBox', module);
export const props = {
  value: '',
  buttonText: 'Search',
  placeholder: 'Start Typing',
  onSearchHandler: action('Search'),
};

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('SearchBox', withInfo('Search Input Box')(() => <SearchBox {...props} />));
