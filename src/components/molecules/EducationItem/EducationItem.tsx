import * as React from 'react';
import styled from 'styled-components';
import { Label } from "../../atoms";
import { injectIntl, InjectedIntlProps } from 'react-intl';

export interface IEducationItem {
	graduationYearMonth: string;
	educationDesc: string;
	educationEstablishment: string;
};

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const SecondaryColoredLabel = styled(Label)`
	color: ${props => props.theme.secondaryColor};
`;

const EducationItem = ({ graduationYearMonth, educationDesc, educationEstablishment, intl }: IEducationItem & InjectedIntlProps ) => (
	<FlexColumn>
		<Label label={intl.formatDate(graduationYearMonth, { month: "long", year: 'numeric' })}/>
		<SecondaryColoredLabel label={intl.formatMessage({id:`education.${educationDesc}`})} />
		<Label label={educationEstablishment}></Label>
	</FlexColumn>
);

export default injectIntl(EducationItem);