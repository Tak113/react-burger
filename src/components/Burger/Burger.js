import React from 'react';
// import { withRouter } from 'react-router-dom';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	console.log(props);
	//passing ingredients
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => { //changing array type to be flat
			return arr.concat(el)
		}, []);
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Start adding ingredients!</p>;
	}
	// console.log(transformedIngredients);
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
// export default withRouter(burger);