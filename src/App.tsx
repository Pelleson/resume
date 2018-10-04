import * as React from 'react';
import  {Textarea, Label} from "./components/atoms";
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { PersonStore } from "stores";
import styled from 'styled-components';
import { observer } from 'mobx-react';

export interface IApp {
	store: PersonStore;
};

@observer
class App extends React.Component<IApp & InjectedIntlProps> {

	render() {
		const { store, intl } = this.props;
		return (
			<div>
				<Label required>{intl.formatMessage({ id: "common.label" })}</Label>
				<Textarea
				rounded
				value={store.viewModel.fullname} onChange={e => store.onChange("email", e.target.value)}/>
			</div>
		);
	}
}

export default injectIntl(App);
