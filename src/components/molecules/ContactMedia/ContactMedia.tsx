import * as React from 'react';
import styled from 'styled-components';
import { Span, Image, Link } from 'components/atoms';

export interface Props {
	text: string;
	imageSrc: string;
	alt: string;
	href: string;
	linkText: string;
}

const ContactDiv = styled.div`
	display: flex;
`;

const ColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const CustomImage = styled(Image)`
	width: 50px;
	height: 50px;
`;

const CustomSpan = styled(Span)`
	font-size: 1.2em;
	margin-left: 5px;
`;

const CustomLink = styled(Link)`
	margin-left: 5px;
`;

const ContactMedia = ({ text, imageSrc, alt, href, linkText } : Props ) => (
		<ContactDiv>
			<CustomImage src={imageSrc} alt={alt} />

				<ColumnDiv>

					<CustomSpan>
						{text}
					</CustomSpan>

					<CustomLink href={href}>
						{linkText}
					</CustomLink>

				</ColumnDiv>

		</ContactDiv>
);
/** @component */
export default ContactMedia;
