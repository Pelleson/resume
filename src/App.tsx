import * as React from 'react';
import './App.css';
import axios from "axios";
import  {Textarea, Label} from "./components/atoms";
import { injectIntl, InjectedIntlProps } from 'react-intl';

const logo = require('./logo.svg');

class App extends React.Component<InjectedIntlProps> {
	render() {
		const { intl } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Label required>{intl.formatMessage({ id: "common.label" })}</Label>
				<Textarea rounded></Textarea>
			</div>
		);
	}
}

export default injectIntl(App);
