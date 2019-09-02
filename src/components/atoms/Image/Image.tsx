import * as React from 'react';
import styled, { keyframes } from 'styled-components';

export interface IImage {
	src: string;
	alt?: string;
	className?: string;
};

const bounce = keyframes`
	0%, 100%, 20%, 50%, 80% {
		transform: translateY(0)
	}
	40% {
		transform: translateY(-10px)
	}
	60% {
		transform: translateY(-5px)
	}
`;

const CustomImage = styled.img`
	height: 100px;
	width: 100px;
	&:hover {
		animation-name: ${bounce};
		animation-duration: 2s;
		animation-delay: 0s;
		animation-iteration-count: 1;
	}
`;

const Image = ({ src, alt, className }: IImage) => (
	<CustomImage src={src} alt={alt} className={className} />
);

export default Image;
