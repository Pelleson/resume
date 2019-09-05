import * as React from 'react';
import { Resume } from "./components/pages";
import { inject, observer } from 'mobx-react';
import { RootStore } from "./stores/RootStore";
import { Header, Footer } from "./components/organisms";
import { IntlProvider, addLocaleData } from 'react-intl';
import { Grid } from 'react-bootstrap';
import styled, { ThemeProvider } from 'styled-components';

addLocaleData(require('react-intl/locale-data/sv'));
addLocaleData(require('react-intl/locale-data/en'));

interface IApp {
	rootStore?: RootStore
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background: ${props => props.theme.background}
`;

const App = ({ rootStore }: IApp) => (
	<IntlProvider key={rootStore.locale} messages={rootStore.messages} locale={rootStore.locale}>
		<ThemeProvider theme={rootStore.selectedTheme}>
			<Wrapper>
				<Grid>
					<Header />
					<Resume />
					<Footer />
				</Grid>
			</Wrapper>
		</ThemeProvider>
	</IntlProvider>
)

export default inject('rootStore')(observer(App));
