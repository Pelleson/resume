import * as React from 'react';
import { Heading, Image, Link } from "../../atoms";
import styled from 'styled-components';

export interface IContactItem {
	src?: string;
	size: number;
	text: string;
	href?: string;
	linkText?: string;
};

const CustomDiv = styled.div`
	display: flex;
`;

const ContactIcon = styled(Image)`
	height: 50px;
	width: 50px;
`;

const ContactLink = styled(Link)`
	color: #34b3b7;
`;

const ColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContactItem = ({ src, size, text, linkText, href }: IContactItem) => (
	<CustomDiv>
		<ContactIcon src={src} />
		<ColumnDiv>
			<Heading size={size}>{text}</Heading>
			<ContactLink href={href}>{linkText}</ContactLink>
		</ColumnDiv>
	</CustomDiv>
);

export default ContactItem;
