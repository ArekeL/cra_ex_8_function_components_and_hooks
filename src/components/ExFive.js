import React, { useState } from "react";
import "./App.css";

const ExFive = () => {
	const [counterClick, setCounterClick] = useState(0);

	const [isActive, setIsActive] = useState(true);

	const handleClick = () => {
		setCounterClick(counterClick + 1);
	};

	const toggelVisibilityBox = () => setIsActive((curentValue) => !curentValue);

	const counterMoveComponent = isActive ? <CounterMove /> : null;
	const btnValue = isActive
		? "Turn off the counter box"
		: "Turn on the counter box";

	return (
		<div className='ex'>
			<h2>Exercise Five</h2>
			<h4>Click & Move Counter - sfc - hooks</h4>
			<br />
			<h4>Clicks counter: {counterClick}</h4>
			<button onClick={handleClick}>Click</button>
			<br />
			<br />
			<button onClick={toggelVisibilityBox}>{btnValue}</button>
			{counterMoveComponent}
		</div>
	);
};

const CounterMove = () => {
	const [counterMove, setCounterMove] = useState(0);
	const handleMove = (e) => {
		setCounterMove(e.clientX + e.clientY);
	};
	return (
		<>
			<h4>Moves counter: {counterMove} </h4>
			<div className='box' onMouseMove={handleMove}>
				<p>Mouse Move</p>
			</div>
		</>
	);
};

export default ExFive;
