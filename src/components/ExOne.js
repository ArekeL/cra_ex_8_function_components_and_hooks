import React from "react";
import "./App.css";

const ExOne = (props) => {
	const [items] = React.useState({
		item1: "Carrot",
		item2: "Water",
		item3: "Potato",
	});

	const ItemList = ({ name, example }) => (
		<li>
			{name} - {example}
		</li>
	);

	return (
		<div className='ex'>
			<h2>Exercise One</h2>
			<div>
				<h4>Shopping list - sfc + hooks (state)</h4>
				<ul>
					<ItemList name={items.item1} example={1 + "kg"} />
					<ItemList name={items.item2} example={1} />
					<ItemList name={items.item3} example={4 + "kg"} />
				</ul>
			</div>
		</div>
	);
};
export default ExOne;
