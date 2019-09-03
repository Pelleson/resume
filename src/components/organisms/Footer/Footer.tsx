import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../atoms';
import { injectIntl, InjectedIntlProps } from 'react-intl';

const Footer = ({ intl }: InjectedIntlProps) => (
	<footer>
		<Paragraph>{intl.formatMessage({ id: "common.footer" })}</Paragraph>
	</footer>
);

export default injectIntl(Footer);
