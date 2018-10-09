import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Label, Link, Textarea, Input } from 'components/atoms';

const rootName = 'Atomic Design/Atoms';

storiesOf(rootName, module)
	.add('Label', () => <Label required tooltip="tooltip">Hejsan</Label>)

storiesOf(rootName, module)
	.add('Link', () => <Link onClick={() => alert('onclick link')}>Link</Link>)

storiesOf(rootName, module)
	.add('Textarea', () => <Textarea></Textarea>)

storiesOf(rootName, module)
	.add('Input', () => <Input value="Input" onChange={e => console.log(e.target.value)}></Input>)