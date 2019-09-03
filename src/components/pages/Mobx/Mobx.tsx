import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Textarea, Input } from "../../atoms";
import { LabeledChild } from "../../molecules";
import { RootStore } from "../../../stores/RootStore";

export interface IMobx {
	rootStore: RootStore;
};

const Mobx = ({rootStore}: IMobx) => (
	<div>
		<Textarea
			rounded
			value={rootStore.personStore.viewModel.fullname} />

		<Input value={rootStore.personStore.viewModel.firstname} onChange={e => rootStore.personStore.onChange("firstname", e.target.value)} />

		<Input value={rootStore.personStore.viewModel.lastname} onChange={e => rootStore.personStore.onChange("lastname", e.target.value)} />

		<LabeledChild label="LabeledChild">
			<Input value={rootStore.personStore.viewModel.email} onChange={e => rootStore.personStore.onChange("email", e.target.value)} />
		</LabeledChild>

	</div>
)
export default inject("rootStore")(observer(Mobx));
