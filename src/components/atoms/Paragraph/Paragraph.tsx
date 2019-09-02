import * as React from 'react';
import styled from 'styled-components';

export interface IParagraph {
	children: string;
};

const CustomParagraph = styled.p`
	margin: 0;
`;

const Paragraph = ({ children }: IParagraph) => (
	<CustomParagraph>{children}</CustomParagraph>
)

export default Paragraph;
