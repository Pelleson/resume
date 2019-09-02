import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Label, Link, Textarea, Input, Image, Heading } from '../../../src/components/atoms';
import { HeaderSize } from '../../../src/enums';
const clothesIcon = require('../../../src/media/clothes.png');
const dancingIcon = require('../../../src/media/dancing.png');

const rootName = 'Atomic Design/Atoms';

storiesOf(rootName, module)
	.add('Image', () => (
		<div>
			<Image src={clothesIcon}></Image>
			<Image src={dancingIcon} alt="alt"></Image>
		</div>))

storiesOf(rootName, module)
	.add('Label', () => (
		<div>
			<Label label={"Label"}></Label>
			<Label label={"Label required"} required></Label>
			<Label label={"Label tooltip"} tooltip="tooltip"></Label>
		</div>
	))

storiesOf(rootName, module)
	.add('Link', () => <Link>Link</Link>)

storiesOf(rootName, module)
	.add('Textarea', () => <Textarea></Textarea>)

storiesOf(rootName, module)
	.add('Input', () => <Input value="Input" onChange={e => console.log(e.target.value)}></Input>)

storiesOf(rootName, module)
	.add('Heading', () => <Heading size={HeaderSize.H2}>Heading</Heading>)