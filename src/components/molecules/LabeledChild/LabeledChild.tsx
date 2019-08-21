import * as React from 'react';
import { Label } from "../../atoms";
import styled from 'styled-components';
import { LabeledChildPosition } from "../../../enums";

export interface ILabeledChild{
	children?: any;
	labelPosition?: LabeledChildPosition;
	label?: string;
};

const CustomDiv = styled.div<ILabeledChild>`
	display: flex;
	flex-direction: ${p => p.labelPosition === LabeledChildPosition.Top || p.labelPosition === LabeledChildPosition.Bottom ? 'column' : 'row'};
	div:first-child ${p => p.labelPosition === LabeledChildPosition.Bottom && '{order:2;}'}
	div:first-child ${p => p.labelPosition === LabeledChildPosition.Left && '{order:2;}'}
`;

const LabeledChild = ({children, label, labelPosition = LabeledChildPosition.Top}: ILabeledChild) => (
	<CustomDiv labelPosition={labelPosition}>
		<Label label={label}></Label>
		{children}
	</CustomDiv>
);

export default LabeledChild;
