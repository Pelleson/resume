import * as React from 'react';
import styled from 'styled-components';
import { Heading, Image } from "../../atoms";
import { HeaderSize } from '../../../enums';

export interface IContactItem {
	src: string;
	text: string;
};

const CustomDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CustomImage = styled(Image)`
	height: 40px;
	width: 40px;
	margin: 5px;
`;

const SeaGreenHeader = styled(Heading)`
	color: #34b3b7;
`;

const HobbyItem = ({ src, text }, ) => (
	<CustomDiv>
		<CustomImage src={src} />
		<SeaGreenHeader size={HeaderSize.H4}>{text}</SeaGreenHeader>
	</CustomDiv>
);

export default HobbyItem;