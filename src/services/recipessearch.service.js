// https://api.edamam.com/search

// https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"


//import fetch from 'cross-fetch';

// const APP_ID = "0065716d";
// const APP_KEY = "e3a8635d8385f0641377bf9ef292c7b7";
// const searchKey = "chicken"

// const API_URL = `//api.edamam.com/search?q=chicken&app_id=0065716d&app_key=e3a8635d8385f0641377bf9ef292c7b7`


//https://api.edamam.com/search?q=chicken&app_id=0065716d&app_key=e3a8635d8385f0641377bf9ef292c7b7&health=alcohol-free

//const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

//  const getRecipes = (searchTerm)=> {
//   return fetch(`${API_URL}?s=${searchTerm}`)
//   .then(res => res.json())
//   .then(jsonResponse => {
//     return console.log(jsonResponse)
//   })
// }

//getRecipes("pas")

// .map(meal => mapRecipe(meal)

export const getRecipesSearch = (searchKey) => {
    const APP_ID = "0065716d";
    const APP_KEY = "e3a8635d8385f0641377bf9ef292c7b7";
    //const searchKey = "chicken"
    const API_URL = "https://api.edamam.com/search"
    const path = `${API_URL}?q=${searchKey}&app_id=${APP_ID}&app_key=${APP_KEY}`

//const API_URL = `//api.edamam.com/search?q=${searchKey}&app_id=${APP_ID}&app_key=${APP_KEY}`
  //console.log(`${API_URL}?q=${searchKey}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  return fetch(`${API_URL}?q=${searchKey}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  .then(res => res.json())
  .then(jsonResponse => {
    return [jsonResponse.hits]
  })
}




// getRecipesSearch();

// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }


// // // fetch(API_URL)
// // // .then(res => res.json())
// // // .then(jsonResponse => {
// // //   console.log(jsonResponse)
// // // })

// // //console.log(getRecipesSearch(API_URL));
// // // //mapRecipe function

// // // export const mapRecipe = (recipe) => {
// // //   let ingredients = [];
// // //   Object.keys(recipe).forEach((key) => {
// // //     if(key.includes("Ingre")&&recipe[key]) {
// // //       ingredients.push(recipe[key])
// // //     }
// // //   })
// // //   return {
// // //     ...recipe,
// // //     ingredients: ingredients,
// // //     isFav: false
// // //   }
// // // }




// Or just: import 'cross-fetch/polyfill';
 
// fetch('//api.github.com/users/lquixada')
//   .then(res => {
//     if (res.status >= 400) {
//       throw new Error("Bad response from server");
//     }
//     return res.json();
//   })
//   .then(user => {
//     console.log(user);
//   })
//   .catch(err => {
//     console.error(err);
//   });

