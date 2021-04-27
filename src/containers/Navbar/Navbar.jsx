import React from "react";
import styles from "./Navbar.module.scss";
import Search from "../../components/Search";
import {Link} from "@reach/router";
import logo from "../../logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
  
  return (
    <>
    <nav className={styles.nav}>
      <Link to="/">
        <div className={styles.nav}>
          <img src={logo} alt="My Recipe Search app" />
          {/* <h1>Recipe Search App</h1> */}
        </div>
      </Link>

      {/* <Link to="search"> */}
        <div className={styles.search}>
          <Search />
     
      </div>
   
      {/* </Link> */}
      {/* <div className={styles.searchPanel}>
        <SearchBar placeholder="Search for recipes..." updateSearchText={updateSearchText} />
        <span className={styles.faStyles}>
          <Link to="cookbook">
            <FontAwesomeIcon icon="book-open" />
          </Link>
        </span>
      </div> */}
    </nav>

    </>
  );
};

export default Navbar;
