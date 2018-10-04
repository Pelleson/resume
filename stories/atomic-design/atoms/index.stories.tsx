import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Label } from 'components/atoms';

const rootName = 'Atomic Design/Atoms';

storiesOf(rootName, module)
	.add('Textarea', () => <Label>Hejsan</Label>)