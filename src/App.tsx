import * as React from 'react';
import { Textarea, Label, Input, Heading } from "./components/atoms";
import { LabeledChild, ContactItem, HobbyItem, IconHeader } from "./components/molecules";
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { PersonStore } from "stores";
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { contacts, hobbies } from "./Collections";
import { HeaderSize } from './enums';
const schoolIcon = require('./media/school.png');

export interface IApp {
	store: PersonStore;
};

const FlexRow = styled.div`
	display:flex;
	flex-direction: row;
`;

const HeaderBlackish = styled(Heading)`
	color:#373a3c;
`;

const SeaGreenHeader = styled(Heading)`
	color: #34b3b7;
`;

@observer
class App extends React.Component<IApp & InjectedIntlProps> {

	render() {
		const { store, intl } = this.props;
		return (
			<div>
				<FlexRow>
					<HeaderBlackish size={HeaderSize.H1}>{intl.formatMessage({ id: "common.myName" })}</HeaderBlackish>
					<SeaGreenHeader size={HeaderSize.H1}>{intl.formatMessage({ id: "common.webDeveloper" })}</SeaGreenHeader>
				</FlexRow>

				<div>
					<SeaGreenHeader size={HeaderSize.H2}>{intl.formatMessage({ id: "common.contacts" })}</SeaGreenHeader>
					<React.Fragment>
						{contacts.map((item, index) =>
							<ContactItem key={index} label={item.label} src={item.src} linkText={item.linkText} href={item.href} />
						)}
					</React.Fragment>
				</div>

				<div>
					<SeaGreenHeader size={HeaderSize.H2}>{intl.formatMessage({ id: "common.hobbies" })}</SeaGreenHeader>
					<FlexRow>
						{hobbies.map((item, index) =>
							<HobbyItem key={index} src={item.src} text={item.text} />
						)}
					</FlexRow>
				</div>

				<div>
					<IconHeader src={schoolIcon} text={intl.formatMessage({id: 'common.education'})}></IconHeader>
				</div>

				<div>
					<Label required label={intl.formatMessage({ id: "common.label" })}></Label>
					<Textarea
						rounded
						value={store.viewModel.fullname} />

					<Input value={store.viewModel.firstname} onChange={e => store.onChange("firstname", e.target.value)} />

					<Input value={store.viewModel.lastname} onChange={e => store.onChange("lastname", e.target.value)} />

					<LabeledChild label="LabeledChild">
						<Input value={store.viewModel.email} onChange={e => store.onChange("email", e.target.value)} />
					</LabeledChild>

				</div>
			</div>
		);
	}
}

export default injectIntl(App);
