import React from "react";

const ExThree = () => {
	const [value, setValue] = React.useState("");

	const handleOnChnage = (e) => setValue(e.target.value);
	const handleOnClick = () => setValue("");
	return (
		<div className='ex'>
			<h2>Execise Three</h2>
			<h4>Add text - sfc + hooks</h4>
			<input
				type='text'
				placeholder='Add text ...'
				onChange={handleOnChnage}
				value={value}
			/>
			<button onClick={handleOnClick}>Reset</button>
			<h4>{value.toUpperCase()}</h4>
		</div>
	);
};

export default ExThree;
