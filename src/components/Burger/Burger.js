import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ( props ) => {
//object keys turns object into an array so that we can map through it

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;