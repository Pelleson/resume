import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LabeledChild, ContactItem } from "../../../src/components/molecules";
import { Input } from "../../../src/components/atoms"
import { LabeledChildPosition } from '"../../../src/enums';
const dancingIcon = require('../../../src/media/dancing.png');

const rootName = 'Atomic Design/Molecules';

storiesOf(rootName, module)
	.add('LabeledChild', () => (
		<div>
			<LabeledChild label="LabeledChildTop" labelPosition={LabeledChildPosition.Top}>
				<Input value={'input'} onChange={e => console.log(e.target.value)} />
			</LabeledChild>
			<LabeledChild label="LabeledChildRight" labelPosition={LabeledChildPosition.Right}>
				<Input value={'input'} onChange={e => console.log(e.target.value)} />
			</LabeledChild>
			<LabeledChild label="LabeledChildLeft" labelPosition={LabeledChildPosition.Left}>
				<Input value={'input'} onChange={e => console.log(e.target.value)} />
			</LabeledChild>
			<LabeledChild label="LabeledChildBottom" labelPosition={LabeledChildPosition.Bottom}>
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