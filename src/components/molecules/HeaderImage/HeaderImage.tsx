import * as React from 'react';
import styled from 'styled-components';
import { HeaderOne, Image } from 'components/atoms';
const Logo = require('../../../media/logo.svg');

const HeaderDiv = styled.div `
	display: flex;
	align-items: center;
`;

const CustomImage = styled(Image) `
	width: 50px;
	height: 50px;
`;

const HeaderImage = () => {
	return (
		<HeaderDiv>
			<HeaderOne>
				Pelle Alstermo
			</HeaderOne>
			<CustomImage src={Logo} alt="Image"/>
		</HeaderDiv>
	);
};

/** @component */
export default HeaderImage;
