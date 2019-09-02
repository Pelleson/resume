import * as React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/App';

const rootName = 'App';

storiesOf(rootName, module)
	.add('App', () => <App />)