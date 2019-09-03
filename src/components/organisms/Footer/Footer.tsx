import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../atoms';
import { injectIntl, InjectedIntlProps } from 'react-intl';

const CustomFooter = styled.footer`
	text-align: center;
	margin-top: 5em;
`;

const CustomParagraph = styled(Paragraph)`
	text-transform: uppercase;
	font-size: 1.2rem;
	line-height: 1.2rem;
	letter-spacing: 0.2rem;
`;

const Footer = ({ intl }: InjectedIntlProps) => (
	<CustomFooter>
		<CustomParagraph>{intl.formatMessage({ id: "common.footer" })}</CustomParagraph>
	</CustomFooter>
);

export default injectIntl(Footer);
