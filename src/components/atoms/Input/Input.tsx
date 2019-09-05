import * as React from 'react';

export interface IInput {
	value: string;
	onChange?(event: React.ChangeEvent<HTMLInputElement>): void
};

const Input = ({ value, onChange }: IInput) => (
	<input
		value={value}
		onChange={onChange} />
)

export default Input;
