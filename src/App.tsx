import * as React from 'react';
import { Resume } from "./components/pages";
import { inject, observer } from 'mobx-react';
import { RootStore } from "./stores/RootStore";
import { Header, Footer } from "./components/organisms";
import { IntlProvider, addLocaleData } from 'react-intl';
import { Grid } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import { BasicTheme } from "./themes/BasicTheme";

addLocaleData(require('react-intl/locale-data/sv'));
addLocaleData(require('react-intl/locale-data/en'));

interface IApp {
	rootStore?: RootStore
}

const App = ({ rootStore }: IApp) => (
	<IntlProvider key={rootStore.locale} messages={rootStore.messages} locale={rootStore.locale}>
		<ThemeProvider theme={BasicTheme}>
			<Grid>
				<Header />
				<Resume />
				<Footer />
			</Grid>
		</ThemeProvider>
	</IntlProvider>
)

export default inject('rootStore')(observer(App));
