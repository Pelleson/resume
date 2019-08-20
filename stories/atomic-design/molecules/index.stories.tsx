import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LabeledChild, ContactItem } from "../../../src/components/molecules";
import { Input } from "../../../src/components/atoms"
const dancingIcon = require('../../../src/media/dancing.png');

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

storiesOf(rootName, module)
	.add('ContactItem', () => (
		<div>
			<ContactItem text="ContactItem" size={1.2} src={dancingIcon} linkText="LinkText" href="www.google.se"/>
		</div>
	));