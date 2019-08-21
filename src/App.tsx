import * as React from 'react';
import { Textarea, Label, Input, Heading } from "./components/atoms";
import { LabeledChild, ContactItem } from "./components/molecules";
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { PersonStore } from "stores";
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { contacts } from "./Collections";
export interface IApp {
	store: PersonStore;
};

const Resume = styled.div`
	background-color: #f7f7f7;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	overflow: auto;
	background-image: linear-gradient(141deg, #c2c2c2 0%, #c9c9c9 51%, #b5b3b3 75%);
	opacity: 0.95;
`;

const TopHeader = styled.div`
	display:flex;
	flex-direction: row;
`;

const HeaderBlackish = styled(Heading)`
	color:#373a3c;
`;

const SeaGreenHeader = styled(Heading)`
	color: #34b3b7;
	align-self: center;
`;

@observer
class App extends React.Component<IApp & InjectedIntlProps> {

	render() {
		const { store, intl } = this.props;
		return (
			<Resume>
				<TopHeader>
					<HeaderBlackish size={1.8}>{intl.formatMessage({ id: "common.myName" })}</HeaderBlackish>
					<SeaGreenHeader size={1.8}>{intl.formatMessage({ id: "common.webDeveloper" })}</SeaGreenHeader>
				</TopHeader>

				<SeaGreenHeader size={1.8}>{intl.formatMessage({ id: "common.contacts" })}</SeaGreenHeader>
				<React.Fragment>
				{contacts.map((item, index) =>
					<ContactItem key={index} text={item.text} size={item.size} src={item.src} linkText={item.linkText} href={item.href}/>
				)}
				</React.Fragment>
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
			</Resume>
		);
	}
}

export default injectIntl(App);
