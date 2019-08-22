import * as React from 'react';
import styled from 'styled-components';
import { Label } from "../../atoms";
import { injectIntl, InjectedIntlProps } from 'react-intl';

export interface IEducationItem {
	graduationYearMonth: string;
	educationName: string;
	educationEstablishment: string;
};

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const SeaGreenLabel = styled(Label)`
	color: #34b3b7 !important;
`;

const EducationItem = ({ graduationYearMonth, educationName, educationEstablishment, intl }: IEducationItem & InjectedIntlProps ) => (
	<FlexColumn>
		<Label label={intl.formatDate(graduationYearMonth, { month: "long", year: 'numeric' })}></Label>
		<SeaGreenLabel label={educationName}></SeaGreenLabel>
		<Label label={educationEstablishment}></Label>
	</FlexColumn>
);

export default injectIntl(EducationItem);