import React from "react";
import "./App.css";
const ExTwo = () => {
	const [text, setText] = React.useState("");

	const handleOnClick = () => {
		const letter = "a";
		setText(text + letter);
	};
	return (
		<div className='ex'>
			<h2>Execise Two</h2>
			<h4>Add letter A - sfc + hooks</h4>
			<br />
			<button onClick={handleOnClick}>Add Letter A</button>
			<h4>{text}</h4>
		</div>
	);
};

export default ExTwo;
