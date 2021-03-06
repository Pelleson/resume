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
const laptopIcon = require('../../../media/laptop.png');
const reactIcon = require('../../../media/react.png');
const csharpIcon = require('../../../media/c_sharp.png');
const dbIcon = require('../../../media/database.png');

const HobbieRow = styled.div`
	display:flex;
	flex-flow: row wrap;
	margin-right: 10em;
`;

const CustomRow = styled(Row)`
	margin-top: 5em;
`;

const FlexColumn = styled.div`
	display:flex;
	flex-direction: column;
`;

const SecondaryColoredHeading = styled(Heading)`
	color: ${props => props.theme.secondaryColor}
`;

const SecondaryColoredLabel = styled(Label)`
	color: ${props => props.theme.secondaryColor}
`;

const CustomImage = styled(Image)`
	height: 45px;
	width: 45px;
	margin: 5px;
`;

const LangImage = styled(Image)`
	height: 150px;
	width: 150px;
	align-self: flex-end;
	position: absolute;
`;

const CustomHeadedChild = styled(HeadedChild)`
	color: ${props => props.theme.secondaryColor}
	align-items: center;
`;

const BigHeadedChild = styled(HeadedChild)`
	align-items: center;
`;

const BigImage = styled(Image)`
	height: 150px;
	width: 150px;
	margin: 1em;
`;

const HobbieItem = styled(HeadedChild)`
	color: ${props => props.theme.secondaryColor}
	align-items: center;
	margin-right: 1em;
`;

class Resume extends React.Component<InjectedIntlProps> {

	render() {
		const { intl } = this.props;
		return (
			<React.Fragment>

				<CustomRow>
					<Col lg={6}>
						<SecondaryColoredHeading size={HeaderSize.H2}>{intl.formatMessage({ id: "common.contacts" })}</SecondaryColoredHeading>
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
								<EducationItem
									key={index}
									graduationYearMonth={item.graduationYearMonth}
									educationDesc={item.educationDesc}
									educationEstablishment={item.educationEstablishment} />
							)}
						</FlexColumn>
					</Col>
				</CustomRow>

				<CustomRow>
					<Col lg={6}>
						<SecondaryColoredHeading size={HeaderSize.H2}>{intl.formatMessage({ id: "common.hobbies" })}</SecondaryColoredHeading>
						<HobbieRow>
							{hobbies.map((item, index) =>
								<HobbieItem key={index} text={intl.formatMessage({ id: `hobbies.${item.key}` })} textPosition={TextPosition.Bottom} size={HeaderSize.H4}>
									<CustomImage src={item.src} bounce></CustomImage>
								</HobbieItem>
							)}
						</HobbieRow>
					</Col>
					<Col lg={6}>
						<CustomHeadedChild textPosition={TextPosition.Left} size={HeaderSize.H2} text={intl.formatMessage({ id: 'common.languages' })}>
							<CustomImage src={langIcon} ></CustomImage>
						</CustomHeadedChild>
						<FlexColumn>
							{languages.map((item, index) =>
								<React.Fragment key={index}>
									<SecondaryColoredLabel label={intl.formatMessage({ id: `language.id.${item.languageId}` })} />
									<Label label={intl.formatMessage({ id: `language.proficiencyLvl.${item.proficiencyLvl}` })} />
								</React.Fragment>
							)}

							<LangImage src={megaLangIcon}></LangImage>

						</FlexColumn>
					</Col>
				</CustomRow>

				<CustomRow>
					<Col lg={12}>
						<SecondaryColoredHeading size={HeaderSize.H2}>{intl.formatMessage({ id: "common.workExperience" })}</SecondaryColoredHeading>
					</Col>
					{workExperiences.map((item, index) =>
						<Col lg={6} key={index}>
							<FlexColumn>
								<Label label={intl.formatMessage({ id: `common.${item.profession}` })} />
								<SecondaryColoredLabel label={item.company} />
								<Paragraph>{intl.formatMessage({ id: `work.desc.${item.workDescriptionKey}` })}</Paragraph>
							</FlexColumn>
						</Col>
					)}
				</CustomRow>

				<CustomRow>
					<Col lg={6}>
						<BigHeadedChild textPosition={TextPosition.Right} size={HeaderSize.H1} text={intl.formatMessage({ id: 'common.professionalskills' })}>
							<BigImage src={laptopIcon} ></BigImage>
						</BigHeadedChild>
					</Col>
					<Col lg={6}>
							<BigImage src={reactIcon} ></BigImage>
							<BigImage src={csharpIcon} ></BigImage>
							<BigImage src={dbIcon} ></BigImage>
					</Col>

				</CustomRow>

			</React.Fragment>
		);
	}
}

export default injectIntl(Resume);
