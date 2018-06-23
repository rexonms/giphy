import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import LoadingBars from './index';

const stories = storiesOf('lib/LoadingBars', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('LoadingBars', withInfo('Standard Loading bar')(() => <LoadingBars />));
