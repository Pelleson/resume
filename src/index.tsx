import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as moment from 'moment';

addLocaleData(require('react-intl/locale-data/sv'));
addLocaleData(require('react-intl/locale-data/en'));

const locale: string = "sv-SE";
const localePrefix = locale.split("-")[0];
const messages = require(`./translations/${localePrefix}`).default;
moment.locale(locale);

ReactDOM.render(
	<IntlProvider messages={messages} locale={localePrefix} >
	<App />
	</IntlProvider>,
	document.getElementById('root') as HTMLElement
);
