import * as React from 'react';
import { Resume } from "./components/pages";
import { inject, observer } from 'mobx-react';
import { RootStore } from "./stores/RootStore";
import { Header } from "./components/organisms";
import { IntlProvider, addLocaleData } from 'react-intl';
import { Grid } from 'react-bootstrap';

addLocaleData(require('react-intl/locale-data/sv'));
addLocaleData(require('react-intl/locale-data/en'));

interface IApp {
	rootStore?: RootStore
}

const App = ({ rootStore }: IApp) => (
	<IntlProvider key={rootStore.locale} messages={rootStore.messages} locale={rootStore.locale}>
		<Grid>
			<Header />
			<Resume />
		</Grid>
	</IntlProvider>
)

export default inject('rootStore')(observer(App));
