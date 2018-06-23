import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import GifWithInfo from './index';

const stories = storiesOf('lib/GifWithInfo', module);
export const props = {
  id: 'b1YFCoOD2aX2E',
  title: 'frances mcdormand smiling GIF by Maudit',
  rating: 'g',
  user: {
    avatarUrl: 'https://media0.giphy.com/avatars/maudit.gif',
  },
  image: {
    url: {
      url: 'https://media2.giphy.com/media/b1YFCoOD2aX2E/200_d.gif',
      width: '345',
      height: '200',
      size: '353795',
      webp: 'https://media2.giphy.com/media/b1YFCoOD2aX2E/200_d.webp',
      webp_size: '102774',
    },
  },
};

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('GifWithInfo', withInfo('A Stateful Component example that toggles the bulb state based on user click event.')(() => <GifWithInfo {...props} />));
