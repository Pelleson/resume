import * as React from 'react';
import { Image, Link, Label } from "../../atoms";
import styled from 'styled-components';

export interface IContactItem {
	src?: string;
	label: string;
	href?: string;
	linkText?: string;
};

const CustomDiv = styled.div`
	display: flex;
`;

const ContactIcon = styled(Image)`
	height: 40px;
	width: 40px;
	margin: 5px;
`;

const ContactLink = styled(Link)`
	color: #34b3b7;
`;

const ColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContactItem = ({ src, label, linkText, href }: IContactItem) => (
	<CustomDiv>
		<ContactIcon src={src} />
		<ColumnDiv>
			<Label label={label}></Label>
			<ContactLink href={href}>{linkText}</ContactLink>
		</ColumnDiv>
	</CustomDiv>
);

export default ContactItem;
