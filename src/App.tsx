import * as React from 'react';
import './App.css';
import axios from "axios";
import  ResumeHeader from "./components/molecules/ResumeHeader/ResumeHeader";
import  HobbyItem from "./components/molecules/HobbyItem/HobbyItem";

const logo = require('./logo.svg');

const dancing = require('./media/dancing.png');

class App extends React.Component {
	render() {
		/* tslint:disable */
		axios.get('https://api.github.com/zen')
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		/* tslint:enable */
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<ResumeHeader></ResumeHeader>
				<HobbyItem text="Dancing" imageSrc={dancing}></HobbyItem>
			</div>
		);
	}
}

export default App;
