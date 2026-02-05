import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./mealCard.module.css";
import Footer from "./Footer";

const Mealcards = ({ detail }) => {
  console.log(detail);

  return (
    <div className={styles["meals"]}>
      {!detail
        ? "" 
        : detail.map((curItem) => {
            return (
              <div className={styles["mealImg"]}>
                <img className={styles["imageCard"]} src={curItem.strMealThumb}></img>
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Recipe</button>{" "}
                </NavLink>
              </div>
            );
          })}
           
    </div>
  );
};

export default Mealcards;
