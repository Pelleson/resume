import * as React from 'react';
import styled from 'styled-components';

interface ITextarea {
	value: string,
	rounded?: boolean,
	onChange(value: React.ChangeEvent<HTMLTextAreaElement>): void
};

const CustomTextarea = styled.textarea<ITextarea>`
	padding: 5px;
	width: 100%;
	box-sizing: border-box;
	font-size: 1em;
	border: 1px solid black;

	&:focus {
		box-shadow: 0 0 0 0.1rem black;
		outline: 0;
	}

	border-radius: ${p => p.rounded && '5px'};
`;

const Textarea = ({ rounded, value, onChange }: ITextarea) => (
	<CustomTextarea
	value={value}
	rounded={rounded}
	onChange={onChange} />
);

export default Textarea;