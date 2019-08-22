import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LabeledChild, ContactItem, HobbyItem, IconHeader, EducationItem } from "../../../src/components/molecules";
import { Input } from "../../../src/components/atoms"
import { LabeledChildPosition } from '../../../src/enums';
const dancingIcon = require('../../../src/media/dancing.png');
const hejIcon = require('../../../src/media/hej.png');

const rootName = 'Atomic Design/Molecules';

storiesOf(rootName, module)
	.add('ContactItem', () => (
		<div>
			<ContactItem label="ContactItem" src={dancingIcon} linkText="LinkText" href="www.google.se" />
		</div>
	));

storiesOf(rootName, module)
	.add('HobbyItem', () => (<HobbyItem text="HobbyItem" src={hejIcon} />));

storiesOf(rootName, module)
	.add('IconHeader', () => (<IconHeader text="IconHeader" src={hejIcon} />));

storiesOf(rootName, module)
	.add('EducationItem', () => (<EducationItem graduationYearMonth={"2019-08-14 08:27:41.517"} educationName="computer science" educationEstablishment="Harvard" />));

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
