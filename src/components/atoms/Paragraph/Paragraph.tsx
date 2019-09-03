import * as React from 'react';
import styled from 'styled-components';

export interface IParagraph {
	children: string;
	className?: string;
};

const CustomParagraph = styled.p`
	margin: 0;
`;

const Paragraph = ({ children, className }: IParagraph) => (
	<CustomParagraph className={className}>{children}</CustomParagraph>
)

export default Paragraph;
