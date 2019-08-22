import * as React from 'react';
import styled from 'styled-components';
import { Heading, Image } from "../../atoms";
import { HeaderSize } from '../../../enums';

export interface IContactItem {
	src: string;
	text: string;
	size?: HeaderSize;
};

const CustomDiv = styled.div`
	display: flex;
	flex-direction: row;
`;

const CustomImage = styled(Image)`
	height: 40px;
	width: 40px;
	margin: 5px;
`;

const SeaGreenHeader = styled(Heading)`
	color: #34b3b7;
`;

const IconHeader = ({ src, text, size = HeaderSize.H4 }, ) => (
	<CustomDiv>
		<SeaGreenHeader size={size}>{text}</SeaGreenHeader>
		<CustomImage src={src} />
	</CustomDiv>
);

export default IconHeader;