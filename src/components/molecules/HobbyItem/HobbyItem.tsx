import * as React from 'react';
import styled from 'styled-components';
import { Span, Image } from 'components/atoms';

export interface Props {
	text: string;
	imageSrc: string;
	alt?: string;
}

const ColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const CustomSpan = styled(Span)`
	font-size: 1.2em;
`;

const CustomImage = styled(Image)`
	width: 50px;
	height: 50px;
`;

const HobbyItem = ( { text, imageSrc, alt } : Props ) => (
		<ColumnDiv>
			<CustomImage src={imageSrc} alt={alt} />

			<CustomSpan>
				{text}
			</CustomSpan>

		</ColumnDiv>
);

/** @component */
export default HobbyItem;
