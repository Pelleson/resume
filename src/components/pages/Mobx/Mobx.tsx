import * as React from 'react';
import { observer } from 'mobx-react';
import { Textarea, Input } from "../../atoms";
import { LabeledChild } from "../../molecules";
import { PersonStore } from "../../../stores";

export interface IMobx {
	store: PersonStore;
};

const Mobx = ({store}: IMobx) => (
	<div>
		<Textarea
			rounded
			value={store.viewModel.fullname} />

		<Input value={store.viewModel.firstname} onChange={e => store.onChange("firstname", e.target.value)} />

		<Input value={store.viewModel.lastname} onChange={e => store.onChange("lastname", e.target.value)} />

		<LabeledChild label="LabeledChild">
			<Input value={store.viewModel.email} onChange={e => store.onChange("email", e.target.value)} />
		</LabeledChild>

	</div>
)
export default observer(Mobx);
