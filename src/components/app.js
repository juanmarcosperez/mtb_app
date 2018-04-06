import React, { Component } from "react";
import searchBar from "./searchBar";
import calendar from "./calendar";
import SurveyForm from "./SurveyForm";

class App extends Component {
	render() {
		return (
			<div>
				<searchBar />
				<SurveyForm />
			</div>
		);
	}
}

export default App;
