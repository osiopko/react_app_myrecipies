import React from "react";
import styles from "./Ingredient.module.scss";

const Ingredient = (props) => {


  return (
    <>
      <p>Recipe Details</p>
      {props.ingredients.map(ingredient => {
        return (
          <ul className="ingredient-list">
            <li>{ingredient.text}</li>
            <li>Weight - {ingredient.weight}</li>
          </ul>
        )
      })}
    </>
  );
};

export default Ingredient;
