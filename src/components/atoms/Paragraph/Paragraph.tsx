import * as React from 'react';
import styled from 'styled-components';

export interface IParagraph {
	children: string;
	className?: string;
};

const CustomParagraph = styled.p`
	font-size: 1.6rem;
	letter-spacing: 0.001rem;
	line-height: 2.8rem;
	margin: 0;
	color: ${props => props.theme.primaryColor}
`;

const Paragraph = ({ children, className }: IParagraph) => (
	<CustomParagraph className={className}>{children}</CustomParagraph>
)

export default Paragraph;
