import * as React from 'react';
import  {Textarea, Label, Input } from "./components/atoms";
import { LabeledChild } from "./components/molecules";
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
				<Label required label={intl.formatMessage({ id: "common.label" })}></Label>
				<Textarea
				rounded
				value={store.viewModel.fullname}/>

				<Input value={store.viewModel.firstname} onChange={e => store.onChange("firstname", e.target.value)} />

				<Input value={store.viewModel.lastname} onChange={e => store.onChange("lastname", e.target.value)} />

				<LabeledChild label="LabeledChild">
					<Input value={store.viewModel.email} onChange={e => store.onChange("email", e.target.value)} />
				</LabeledChild>

			</div>
		);
	}
}

export default injectIntl(App);
