import * as React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { HeaderSize, TextPosition } from '../../../enums';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Label, Heading, Image, Paragraph } from "../../atoms";
import { ContactItem, HeadedChild, EducationItem } from "../../molecules";
import { contacts, hobbies, educations, languages, workExperiences } from "../../../Collections";

const langIcon = require('../../../media/shapes.png');
const schoolIcon = require('../../../media/school.png');
const megaLangIcon = require('../../../media/megalang.png');

const FlexRow = styled.div`
	display:flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;

const CustomRow = styled(Row)`
	margin-top: 3em;
	margin-bottom: 3em;
`;

const FlexColumn = styled.div`
	display:flex;
	flex-direction: column;
`;

const SeaGreenHeader = styled(Heading)`
	color: #34b3b7;
`;

const SeaGreenLabel = styled(Label)`
	color: #34b3b7;
`;

const CustomImage = styled(Image)`
	height: 45px;
	width: 45px;
	margin: 5px;
`;

const LangImage = styled(Image)`
	height: 150px;
	width: 150px;
`;

const CustomHeadedChild = styled(HeadedChild)`
	color: #34b3b7;
	align-items: center;
`;

const HobbieItem = styled(HeadedChild)`
	color: #34b3b7;
	align-items: center;
`;

const HobbieMargin = styled(HeadedChild)`
	color: #34b3b7;
	align-items: center;
	margin-right: 5em;
`;

const CustomHr = styled.hr`
	flex-basis: 100%;
	height: 0;
	margin: 0;
	border: 0;
`;

class Resume extends React.Component<InjectedIntlProps> {

	render() {
		const { intl } = this.props;
		return (
			<React.Fragment>

				<CustomRow>
					<Col lg={6}>
						<SeaGreenHeader size={HeaderSize.H2}>{intl.formatMessage({ id: "common.contacts" })}</SeaGreenHeader>
						<React.Fragment>
							{contacts.map((item, index) =>
								<ContactItem
								key={index}
								label={intl.formatMessage({ id: `contact.${item.contactType}` })}
								src={item.src}
								linkText={intl.formatMessage({ id: `contact.linkText.${item.contactType}` })}
								href={item.href} />
							)}
						</React.Fragment>
					</Col>

					<Col lg={6}>
						<CustomHeadedChild textPosition={TextPosition.Left} size={HeaderSize.H2} text={intl.formatMessage({ id: 'common.education' })}>
							<CustomImage src={schoolIcon} ></CustomImage>
						</CustomHeadedChild>
						<FlexColumn>
							{educations.map((item, index) =>
								<EducationItem key={index} graduationYearMonth={item.graduationYearMonth} educationName={item.educationName} educationEstablishment={item.educationEstablishment} />
							)}
						</FlexColumn>
					</Col>
				</CustomRow>

				<CustomRow>
					<Col lg={6}>
						<SeaGreenHeader size={HeaderSize.H2}>{intl.formatMessage({ id: "common.hobbies" })}</SeaGreenHeader>
						<FlexRow>
							{hobbies.map((item, index) => {
								return index === 4 || index === 9 ?
									<React.Fragment>
										<HobbieMargin key={index} text={item.text} textPosition={TextPosition.Bottom} size={HeaderSize.H4}>
											<CustomImage src={item.src} bounce></CustomImage>
										</HobbieMargin>
										<CustomHr/>
									</React.Fragment>
									:
									<HobbieItem key={index} text={item.text} textPosition={TextPosition.Bottom} size={HeaderSize.H4}>
										<CustomImage src={item.src} bounce></CustomImage>
									</HobbieItem>
							})}
						</FlexRow>
					</Col>
					<Col lg={6}>
						<CustomHeadedChild textPosition={TextPosition.Left} size={HeaderSize.H2} text={intl.formatMessage({ id: 'common.languages' })}>
							<CustomImage src={langIcon} ></CustomImage>
						</CustomHeadedChild>
						<FlexColumn>
							{languages.map((item, index) =>
								<React.Fragment key={index}>
									<SeaGreenLabel label={item.language} />
									<Label label={item.proficiency} />
								</React.Fragment>
							)}

							<LangImage src={megaLangIcon} bounce></LangImage>

						</FlexColumn>
					</Col>
				</CustomRow>

				<Row>
					<Col lg={12}>
						<SeaGreenHeader size={HeaderSize.H2}>{intl.formatMessage({ id: "common.workExperience" })}</SeaGreenHeader>
					</Col>
				</Row>
				<Row>
					<FlexRow>
						{workExperiences.map((item, index) =>
							<Col lg={6} key={index}>
								<FlexColumn>
									<Label label={item.jobTitle} />
									<SeaGreenLabel label={item.company} />
									<Paragraph>{item.jobDescription}</Paragraph>
								</FlexColumn>
							</Col>
						)}
					</FlexRow>
				</Row>

			</React.Fragment>
		);
	}
}

export default injectIntl(Resume);
