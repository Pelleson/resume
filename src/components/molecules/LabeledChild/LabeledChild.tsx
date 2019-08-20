import * as React from 'react';
import { Label } from "../../atoms";
import { ILabel } from 'components/atoms/Label';
import styled from 'styled-components';

export interface ILabeledChild{
	children?: any;
	labelFirst?: boolean;
	label?: string;
};

const CustomDiv = styled.div<ILabeledChild>`
	display: flex;
	flex-direction: ${p => p.labelFirst ? 'row' : 'column'};
`;

const LabeledChild = ({children, label, labelFirst}: ILabeledChild) => (
	<CustomDiv labelFirst={labelFirst}>
		<Label label={label}></Label>
		{children}
	</CustomDiv>
);

export default LabeledChild;
