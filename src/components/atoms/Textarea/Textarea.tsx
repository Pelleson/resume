import * as React from 'react';
import styled from 'styled-components';

interface ITextarea {
	value: string,
	rounded?: boolean,
	onChange(value: React.ChangeEvent<HTMLTextAreaElement>): void
};

const CustomTextarea = ({ rounded, ...rest }: Partial<ITextarea>) => <textarea {...rest} />;

const Textarea = styled(CustomTextarea)`
	padding: 5px;
	width: 100%;
	box-sizing: border-box;
	font-size: 12px;
	border: 1px solid black;

	&:focus {
		box-shadow: 0 0 0 0.1rem black;
		outline: 0;
	}
`;

export default Textarea;
