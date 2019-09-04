import * as React from 'react';
import { Heading } from "../../atoms";
import styled from 'styled-components';
import { HeaderSize } from '../../../enums';
import { inject, observer } from "mobx-react";
import { RootStore } from '../../../stores/RootStore';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Button } from 'react-bootstrap';

interface IHeader {
	rootStore?: RootStore;
};

const CustomHeader = styled.header`
	display:flex;
	margin-top: 2em;
	> * {
		margin: 0.1em;
	}
	*:last-child {
		> button {margin-right: 0.3em;}
		margin-left: auto;
	}
`;

const HeaderBlackish = styled(Heading)`
	color:#373a3c;
`;

const SeaGreenHeader = styled(Heading)`
	color: #34b3b7;
`;

const Header = ({ rootStore, intl }: IHeader & InjectedIntlProps) => (
	<CustomHeader>
		<HeaderBlackish size={HeaderSize.H1}>{intl.formatMessage({ id: "common.myName" })}</HeaderBlackish>
		<SeaGreenHeader size={HeaderSize.H1}>{intl.formatMessage({ id: "common.webDeveloper" })}</SeaGreenHeader>
		<div>
			<Button onClick={() => rootStore.onChangeTheme()}>{intl.formatMessage({ id: "common.theme" })}</Button>
			<span className={`flag-icon flag-icon-${rootStore.locale === 'en' ? 'se' : 'gb'}`} onClick={() => rootStore.changeLang(rootStore.locale === 'sv' ? 'en' : 'sv')}></span>
		</div>
	</CustomHeader>
);

export default injectIntl(inject('rootStore')(observer(Header)));