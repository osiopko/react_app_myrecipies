import React from "react";
import styles from "./NotFound.module.scss";

const NotFound = (props) => {
  const {allertMessage} = props;

  return (
    <>
    <section>
        <h2>{allertMessage}</h2>
        {/* <p>Unfortunately we couldn't find that page</p> */}
    </section>
    </>
  );
};

export default NotFound;
