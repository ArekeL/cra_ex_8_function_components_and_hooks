import React from "react";
import "./App.css";
import ExOne from "./ExOne.js";
import ExTwo from "./ExTwo.js";
import ExThree from "./ExThree";
import ExFour from "./ExFour";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Hello World</h1>
				<p>Below You can find some exercises.</p>
			</header>
			<ExOne />
			<ExTwo />
			<ExThree />
			<ExFour />
		</div>
	);
}

export default App;
