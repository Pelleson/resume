import * as React from 'react';
import styled from 'styled-components';

import { ifProp } from 'styled-tools';

interface LinkProps {
	bold?: boolean,
	children?: string[] | string,
	selected?: boolean,
	href?: string,
	onClick?(event: React.MouseEvent<HTMLAnchorElement>):void
}

const CustomLink = ({ bold = false, selected = false, ...rest }: LinkProps) => <a {...rest} />;

const Link = styled(CustomLink) `
	text-decoration: ${ifProp('selected', 'underline', 'none')};
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
	font-size: 12px;
	color: black;
	font-weight: ${ifProp('bold', 'bold', 'normal')};
`;

/** @component */
export default Link
