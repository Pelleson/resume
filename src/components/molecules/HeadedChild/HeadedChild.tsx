import * as React from 'react';
import { Heading } from "../../atoms";
import styled from 'styled-components';
import { TextPosition, HeaderSize } from "../../../enums";

export interface IHeadedChild{
	children: any;
	textPosition: TextPosition;
	text?: string;
	size?: HeaderSize;
	className?: string;
};

const CustomDiv = styled.div<IHeadedChild>`
	display: flex;
	flex-direction: ${p => p.textPosition === TextPosition.Top || p.textPosition === TextPosition.Bottom ? 'column' : 'row'};
	>span ${p => (p.textPosition === TextPosition.Bottom || p.textPosition === TextPosition.Right) && '{order:2;}'}
`;

const HeadedChild = ({children, text, textPosition = TextPosition.Top, size ,className}: IHeadedChild) => (
	<CustomDiv className={className} textPosition={textPosition}>
		<Heading size={size}>{text}</Heading>
		{children}
	</CustomDiv>
);

export default HeadedChild;
