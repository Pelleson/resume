import * as React from 'react';
import styled from 'styled-components';

export interface ILink{
	children?: string;
	href?: string;
	bold?:boolean;
	className?:string;
};

const CustomLink = styled.a<ILink>`
	text-decoration: none;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
	font-size: 1.2em;
	color: black;
	font-weight: ${p => p.bold ? 'bold' : 'normal'};
`;

const Link = ({bold, children, href, className}: ILink) => (
	<CustomLink bold={bold} href={href} className={className}>
	{children}
	</CustomLink>
);

export default Link;