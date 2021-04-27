import React from "react";
import styles from "./Routes.module.scss";
import {Router} from "@reach/router";
import Navbar from "../containers/Navbar"
import Search from "../components/Search"
import NotFound from "../components/NotFound"
import ShoppingList from "../components/ShoppingList"

const Routes = () => {

  return (
    <>
      <Router>
        <ShoppingList path="shoppinglist" /> 
        {/* <Login path="login" />  */}
        <NotFound default allertMessage=""/>
      </Router>
    </>
  );
};

export default Routes;
