import * as React from 'react';
import  {Textarea, Label} from "./components/atoms";
import { injectIntl, InjectedIntlProps } from 'react-intl';

class App extends React.Component<InjectedIntlProps> {
	render() {
		const { intl } = this.props;
		return (
			<div>
				<Label required>{intl.formatMessage({ id: "common.label" })}</Label>
				<Textarea rounded></Textarea>
			</div>
		);
	}
}

export default injectIntl(App);
