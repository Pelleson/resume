import * as React from 'react';
import styled from 'styled-components';
import { HeaderSize } from '../../../enums';

export interface IHeading{
	children: string;
	size: HeaderSize;
	className?: string;
};

const CustomSpan = styled.span<IHeading>`
	font-size: ${p => p.size && `${p.size}`};
	margin: 0.1em;
	font-weight: bold;
`;

const Heading = ({children, size, className}: IHeading) => (
	<CustomSpan size={size} className={className}>
		{children}
	</CustomSpan>
);

export default Heading;
