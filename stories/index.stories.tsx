import * as React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/App';
import { PersonStore } from "../src/stores";

const rootName = 'App';
const store = new PersonStore();

storiesOf(rootName, module)
	.add('App', () => <App store={store}/>)