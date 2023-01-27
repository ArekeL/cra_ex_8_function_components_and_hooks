import React from "react";

const ExFour = () => {
	return (
		<div className='ex'>
			<h2>Execise Four</h2>
			<h4>Counter - sfc + hooks</h4>
			<br />
			<Counter />
		</div>
	);
};

const Counter = () => {
	const [count, setCount] = React.useState(0);
	const [result, setResult] = React.useState(startValue);

	const handleMathClick = (type, number = 1) => {
		if (type === "subtraction") {
			setCount(count + 1);
			setResult(result - number);
		} else if (type === "addition") {
			setCount(count + 1);
			setResult(result + number);
		} else if (type === "reset") {
			setCount(count + 1);
			setResult(startValue);
		}
	};

	return (
		<>
			<ButtonMath
				name='-10'
				number='10'
				type='subtraction'
				click={handleMathClick}
			/>
			<ButtonMath
				name='-1'
				number='1'
				type='subtraction'
				click={handleMathClick}
			/>
			<ButtonMath name='Reset' type='reset' click={handleMathClick} />
			<ButtonMath
				name='+1'
				number='1'
				type='addition'
				click={handleMathClick}
			/>
			<ButtonMath
				name='+10'
				number='10'
				type='addition'
				click={handleMathClick}
			/>
			<Result count={count} result={result} />
		</>
	);
};

const ButtonMath = (props) => {
	const number = parseInt(props.number);

	return (
		<button onClick={() => props.click(props.type, number)}>
			{props.name}
		</button>
	);
};

const Result = (props) => {
	return (
		<>
			<h4>Clicks number: {props.count}</h4>
			<h4>Result: {props.result}</h4>
		</>
	);
};

const startValue = 0;

export default ExFour;
