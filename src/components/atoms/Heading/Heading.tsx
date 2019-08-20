import * as React from 'react';
import styled from 'styled-components';

export interface IHeading{
	children: string;
	size: number;
};

const CustomSpan = styled.span<IHeading>`
	font-size: ${p => p.size && `${p.size}em`};
`;

const Heading = ({children, size}: IHeading) => (
	<CustomSpan size={size}>
		{children}
	</CustomSpan>
);

export default Heading;
