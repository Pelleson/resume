import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Label, Link, Textarea, Input } from 'components/atoms';

const rootName = 'Atomic Design/Atoms';

storiesOf(rootName, module)
	.add('Label', () => (
		<div>
			<Label label={"Label"}></Label>
			<Label label={"Label required"} required></Label>
			<Label label={"Label tooltip"}tooltip="tooltip"></Label>
		</div>
	))

storiesOf(rootName, module)
	.add('Link', () => <Link onClick={() => alert('onclick link')}>Link</Link>)

storiesOf(rootName, module)
	.add('Textarea', () => <Textarea></Textarea>)

storiesOf(rootName, module)
	.add('Input', () => <Input value="Input" onChange={e => console.log(e.target.value)}></Input>)