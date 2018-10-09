import * as React from 'react';
import styled from 'styled-components';
import { injectIntl, InjectedIntlProps } from 'react-intl';

export interface ILabel {
	children?: any,
	tooltip?: string,
	required?: boolean,
	className?: string
};

const CustomLabel = styled.span`
	font-size: 12px;
	color: black;
`;

const DangerText = styled(CustomLabel)`
	color: red;
`;

const Indicator = styled(CustomLabel) `
	color: black;
`;

const PrimaryText = styled(CustomLabel) `
	color: white;
`;

const Wrapper = styled.div`
	cursor: pointer;
	position: relative;
	display: inline-block;
	&:hover {
		> div {
			display: block;
		}
	}
`;

const Popup = styled.div`
	left: 90px;
	top: 30px;
	z-index: 2;
	padding: 5px;
	display: none;
	font-size: 12px;
	position: absolute;
	min-width: 150px;
	border-radius: 5px;
	background: grey;
	transform: translateX(-50%) translateY(-100%);
		&:before {
		left: 48%;
		z-index: 2;
		bottom: -6px;
		border: solid;
		position: absolute;
		border-width: 6px 6px 0 6px;
		border-color: #333 transparent;
	}
`;

const Label = ({ children, tooltip, className, intl, required = false }: ILabel & InjectedIntlProps) => {
	const { formatMessage } = intl;
	return (
		<div className={className}>
			<CustomLabel>{children}</CustomLabel>
			{required && <DangerText>*</DangerText>}
			{
				(tooltip || required) &&
				<Wrapper>
					<Indicator>&nbsp;?</Indicator>
					<Popup>
						{ tooltip && <PrimaryText> {tooltip} <br/> </PrimaryText> }
						{ required && <PrimaryText> <DangerText> * </DangerText> {formatMessage({ id: "common.requiredfield" })} </PrimaryText> }
					</Popup>
				</Wrapper>
			}
		</div>
	);
};

export default injectIntl(Label);
