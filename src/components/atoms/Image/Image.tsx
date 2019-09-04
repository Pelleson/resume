import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

export interface IImage {
	src: string;
	alt?: string;
	bounce?: boolean;
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

const CustomImage = styled.img<IImage>`
	height: 100px;
	width: 100px;
	${p => p.bounce && css`
	&:hover {
		animation: ${bounce} 2s ease-out 1;
	}
	`}
`;

const Image = ({ src, alt, bounce = false, className }: IImage) => (
	<CustomImage src={src} alt={alt} className={className} bounce={bounce}/>
);

export default Image;
