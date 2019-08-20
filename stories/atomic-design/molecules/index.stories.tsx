import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LabeledChild } from "../../../src/components/molecules";
import { Input } from "../../../src/components/atoms"

const rootName = 'Atomic Design/Molecules';

storiesOf(rootName, module)
	.add('LabeledChild', () => (
		<div>
			<LabeledChild label="LabeledChild">
				<Input value={'input'} onChange={e => console.log(e.target.value)} />
			</LabeledChild>
			<LabeledChild label="LabeledChild" labelFirst>
				<Input value={'input'} onChange={e => console.log(e.target.value)} />
			</LabeledChild>
		</div>
	));