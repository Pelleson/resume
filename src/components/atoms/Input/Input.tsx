import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

export interface IInput {
	value: string;
	onChange?(event: React.ChangeEvent<HTMLInputElement>): void
};

class Input extends React.Component<IInput & InjectedIntlProps> {

	render() {
		return (
			<input
				value={this.props.value}
				onChange={this.props.onChange} />
		);
	}
}

export default injectIntl(Input);
