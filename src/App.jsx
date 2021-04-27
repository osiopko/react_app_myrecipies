import React, {useState} from 'react'
import Routes from "./Routes"
import Navbar from "./containers/Navbar";
import Recipe from "./components/Recipe";
//import {getRecipesSearch} from "./services/recipessearch.service.js";
import Axios from "axios";
import NotFound from './components/NotFound';
import styles from "./App.module.scss"

const App = () => {
  
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
  //console.log(result.data.hits);
  setQuery("");
  } else {setAlertMessage("Please enter the value")}
}

const onChange = (event) => {
  setQuery(event.target.value);
}


const onSubmit = (event) => {
  event.preventDefault();
  getData();
};

//const tempdata = "testData"

  return (
  <>
       <section className={styles.nav}>
         <Navbar path="/"/> 
      </section> 

      <section className={styles.content}>
        <Routes  />
      </section>
  </>
  )

}

export default App


  // <div  className={styles.app}>
  //   <h1> Recipe Searching App</h1>

  //    <form onSubmit={onSubmit}>
  //       {allertMessage !="" && <NotFound allertMessage={allertMessage}/>}
  //       <input type="text" placeholder ="Search Recipe" autoComplete = "off" onChange={onChange} value={query}/>
  //       <input type="submit" value="search"/>
  //     </form>

  //     <div className={styles.recipe}>
  //       {/* <Recipe testdata = {tempdata}/> */}
  //        {/* {recipes.map(recipe => <Recipe testdata={recipe.recipe.label}/>)}  */}

  //     {/* {recipes!==[]&&recipes.map(recipe => <h2>{recipe.recipe.label}</h2>)} */}
        
  //        {recipes.map(recipe => <Recipe recipe={recipe} />)} 
  //       {/* {recipes.map(recipe => <Recipe recipe={recipes[0]} />)} */}
  //     </div> 


  // </div>

