import App from './App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import { RootStore } from './stores/RootStore';

import './index.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Provider rootStore={new RootStore()}>
		<App />
	</Provider>,
	document.getElementById('root')
);
