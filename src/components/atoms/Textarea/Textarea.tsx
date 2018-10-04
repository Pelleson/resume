import * as React from 'react';
import styled from 'styled-components';

import { ifProp } from 'styled-tools';
import { palette, size } from 'styled-theme';

interface ITextarea {
	value: string,
	rounded?: boolean,
	onChange(value: React.ChangeEvent<HTMLTextAreaElement>): void
};

const Textarea = styled<{ rounded?: boolean }, "textarea">("textarea")`
	padding: 5px;
	width: 100%;
	box-sizing: border-box;
	font-size: ${size('fontSize')};
	border: 1px solid ${palette('grayscale', 4)};

	&:focus {
		box-shadow: 0 0 0 0.1rem ${palette('grayscale', 4)};
		outline: 0;
	}
	${prop => prop.rounded ?`
		border-radius: .25rem;
	`: ``}
`;

export default Textarea;
