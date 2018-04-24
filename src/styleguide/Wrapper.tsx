import * as React from 'react';
import * as moment from 'moment';
import { IntlProvider, addLocaleData } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from '../components/themes/default';

import Messages from '../translations/sv';

const Wrapper = ({ children }) => {

	addLocaleData(require('react-intl/locale-data/sv'));
	addLocaleData( require('react-intl/locale-data/en'));

	moment.locale('sv-Se');

	return(
		<ThemeProvider theme={DefaultTheme}>
			<IntlProvider messages={Messages} locale={"sv"} >
				{children}
			</IntlProvider>
		</ThemeProvider>
	);
};

export default Wrapper
