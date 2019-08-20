import * as React from 'react';
import styled from 'styled-components';

export interface IImage {
	src: string;
	alt?: string;
	className?: string;
};

const CustomImage = styled.img`
	height: 100px;
	width: 100px;
`;

const Image = ({ src, alt, className }: IImage) => (
	<CustomImage src={src} alt={alt} className={className}/>
);

export default Image;
