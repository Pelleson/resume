import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Label } from "../../atoms";
export interface ILabeledChild {
    Text: string;
    children: JSX.Element;
};

class LabeledChild extends React.Component<ILabeledChild & InjectedIntlProps> {

	render() {
		return (
			<React.Fragment>
                <Label required>{this.props.Text}</Label>
                {this.props.children}
            </React.Fragment>
		);
	}
}

export default injectIntl(LabeledChild);
