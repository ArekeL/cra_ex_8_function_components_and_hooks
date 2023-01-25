import React from "react";
import "./App.css";
import ExOne from "./ExOne.js";
import ExTwo from "./ExTwo.js";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Hello World</h1>
				<p>Below You can find some exercises.</p>
			</header>
			<ExOne />
			<ExTwo />
		</div>
	);
}

export default App;