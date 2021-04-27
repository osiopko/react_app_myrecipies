import React, { useState}from "react";
import styles from "./Search.module.scss";
import Axios from "axios";
import NotFound from '../../components/NotFound';
import Recipe from "../Recipe"


const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] =  useState([]);
  const [allertMessage, setAlertMessage] = useState("");

  const APP_ID = "0065716d";
  const APP_KEY = "e3a8635d8385f0641377bf9ef292c7b7";
  //const query = "chicken"
  const API_URL = "https://api.edamam.com/search"
  const path = `${API_URL}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

const getData = async ()=> {
  if(query!=="") {
  const result = await Axios.get(path);
  setRecipes(result.data.hits);
  console.log(result.data.hits);
  setQuery("");
  } else {setAlertMessage("Please enter the value")}
}

const onChange = (event) => {
  setQuery(event.target.value);
}


const onSubmit = (event) => {
  //console.log("it is working")
  event.preventDefault();
  getData();
};

  return (
    <>
     <div  className={styles.app}>
     
      <form onSubmit={onSubmit}>
         {allertMessage !=="" && <NotFound allertMessage={allertMessage}/>} 
         <input type="text" placeholder ="Search Recipe" autoComplete = "off" onChange={onChange} value={query}/>
         <input type="submit" value="search"/>
       </form>

       <div className={styles.recipe}>
       
          {recipes.map(recipe => <Recipe recipe={recipe} />)} 
         {/* {recipes.map(recipe => <Recipe recipe={recipes[0]} />)} */}
       </div> 


   </div>
    </>
  );
};

export default Search;
