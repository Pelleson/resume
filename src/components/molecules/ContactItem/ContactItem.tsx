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
	height: 45px;
	width: 45px;
	margin: 5px;
`;

const SecondaryColoredLink = styled(Link)`
	color: ${props => props.theme.secondaryColor}
`;

const ColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContactItem = ({ src, label, linkText, href }: IContactItem) => (
	<CustomDiv>
		<ContactIcon src={src} bounce/>
		<ColumnDiv>
			<Label label={label}></Label>
			<SecondaryColoredLink href={href}>{linkText}</SecondaryColoredLink>
		</ColumnDiv>
	</CustomDiv>
);

export default ContactItem;
