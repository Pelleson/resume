import * as React from 'react';
import styled from 'styled-components';
import { HeaderOne, HeaderThree } from 'components/atoms';

const ResumeDiv = styled.div `
	display: flex;
	align-items: center;
`;

const ResumeHeader = () => {
	return (
		<ResumeDiv>
			<HeaderOne>
				Pelle Alstermo
			</HeaderOne>
			<HeaderThree>
				System-Developer
			</HeaderThree>
		</ResumeDiv>
	);
};

/** @component */
export default ResumeHeader;
