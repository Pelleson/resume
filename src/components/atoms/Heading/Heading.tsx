import * as React from 'react';
import styled from 'styled-components';

export interface IHeading{
	children: string;
	size: number;
	className?: string;
};

const CustomSpan = styled.span<IHeading>`
	font-size: ${p => p.size && `${p.size}em`};
`;

const Heading = ({children, size, className}: IHeading) => (
	<CustomSpan size={size} className={className}>
		{children}
	</CustomSpan>
);

export default Heading;
