import React, {useState} from "react";
import styles from "./Recipe.module.scss";
import Ingredient from "../Ingredient"
import { Link } from "@reach/router";
import ShoppingList from "../ShoppingList"

const Recipe = (props) => {

  // console.log(props);
  const {label, image, url, ingredients, calories, source, ingredientLines} = props.recipe.recipe;
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
    <div className = {styles.recipe}>
      <div className={styles.image}>
        <h2>{label}</h2>
        <img src={image} alt={label}/>
      </div>
      <div className={styles.ingredient}>
        <p>Calories{calories}</p>
        <a href={url} target="_blank">Follow the link to get details</a>
        <br/>
        <button className ={styles.button} onClick={()=> setVisible(!visible)}>Ingredients</button>
        {visible && <Ingredient ingredients={ingredients} />}
        <button className ={styles.button} onClick={()=> setShow(!show)}> Create a shopping list</button>
        <Link to="shoppinglist">
            {show && <ShoppingList items={ingredientLines} />}
        </Link>
      </div>
    </div>
    </>
  );
};

export default Recipe;
