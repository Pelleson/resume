import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LabeledChild, ContactItem, EducationItem, HeadedChild } from "../../../src/components/molecules";
import { Input, Image } from "../../../src/components/atoms"
import { TextPosition } from '../../../src/enums';
const dancingIcon = require('../../../src/media/dancing.png');
const rootName = 'Atomic Design/Molecules';

storiesOf(rootName, module)
	.add('ContactItem', () => (
		<div>
			<ContactItem label="ContactItem" src={dancingIcon} linkText="LinkText" href="www.google.se" />
		</div>
	));

storiesOf(rootName, module)
	.add('EducationItem', () => (<EducationItem graduationYearMonth={"2019-08-14 08:27:41.517"} educationName="computer science" educationEstablishment="Harvard" />));

storiesOf(rootName, module)
	.add('LabeledChild', () => (
		<div>
			<LabeledChild label="LabeledChildTop" labelPosition={TextPosition.Top}>
				<Input value={'input'} onChange={e => console.log(e.target.value)} />
			</LabeledChild>
			<LabeledChild label="LabeledChildRight" labelPosition={TextPosition.Right}>
				<Input value={'input'} onChange={e => console.log(e.target.value)} />
			</LabeledChild>
			<LabeledChild label="LabeledChildLeft" labelPosition={TextPosition.Left}>
				<Input value={'input'} onChange={e => console.log(e.target.value)} />
			</LabeledChild>
			<LabeledChild label="LabeledChildBottom" labelPosition={TextPosition.Bottom}>
				<Input value={'input'} onChange={e => console.log(e.target.value)} />
			</LabeledChild>
		</div>
	));

storiesOf(rootName, module)
	.add('HeadedChild', () => (
		<div>
			<HeadedChild text="HeadedChildTop" textPosition={TextPosition.Top}>
				<Image src={dancingIcon} />
			</HeadedChild>
			<HeadedChild text="HeadedChildRight" textPosition={TextPosition.Right}>
				<Image src={dancingIcon} />
			</HeadedChild>
			<HeadedChild text="HeadedChildLeft" textPosition={TextPosition.Left}>
				<Image src={dancingIcon} />
			</HeadedChild>
			<HeadedChild text="HeadedChildBottom" textPosition={TextPosition.Bottom}>
				<Image src={dancingIcon} />
			</HeadedChild>
		</div>
	));