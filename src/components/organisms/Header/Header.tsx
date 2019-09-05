import * as React from 'react';
import { Heading } from "../../atoms";
import styled from 'styled-components';
import { HeaderSize } from '../../../enums';
import { inject, observer } from "mobx-react";
import { Themes } from "../../../Collections";
import { RootStore } from '../../../stores/RootStore';
import { injectIntl, InjectedIntlProps } from 'react-intl';

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

const SecondaryColoredHeading = styled(Heading)`
	color: ${props => props.theme.secondaryColor}
`;

const Header = ({ rootStore, intl }: IHeader & InjectedIntlProps) => (
	<CustomHeader>
		<Heading size={HeaderSize.H1}>{intl.formatMessage({ id: "common.myName" })}</Heading>
		<SecondaryColoredHeading size={HeaderSize.H1}>{intl.formatMessage({ id: "common.webDeveloper" })}</SecondaryColoredHeading>
		<div>
			<select value={rootStore.selectedTheme.name} onChange={e => rootStore.onChangeTheme(e.target.value)}>
				{Themes.map((item, i) =>
					<option key={i} value={item}>{item}</option>
				)}
			</select>
			<span className={`flag-icon flag-icon-${rootStore.locale === 'en' ? 'se' : 'gb'}`} onClick={() => rootStore.changeLang(rootStore.locale === 'sv' ? 'en' : 'sv')}></span>
		</div>
	</CustomHeader>
);

export default injectIntl(inject('rootStore')(observer(Header)));