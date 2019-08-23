import * as React from 'react';
import { Label } from "../../atoms";
import styled from 'styled-components';
import { TextPosition } from "../../../enums";

export interface ILabeledChild{
	children?: any;
	labelPosition?: TextPosition;
	label?: string;
};

const CustomDiv = styled.div<ILabeledChild>`
	display: flex;
	flex-direction: ${p => p.labelPosition === TextPosition.Top || p.labelPosition === TextPosition.Bottom ? 'column' : 'row'};
	div:first-child ${p => p.labelPosition === TextPosition.Bottom && '{order:2;}'}
	div:first-child ${p => p.labelPosition === TextPosition.Left && '{order:2;}'}
`;

const LabeledChild = ({children, label, labelPosition = TextPosition.Top}: ILabeledChild) => (
	<CustomDiv labelPosition={labelPosition}>
		<Label label={label}></Label>
		{children}
	</CustomDiv>
);

export default LabeledChild;
