import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./mealInfo.module.css";

const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const get = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const jsonData = await get.json();
        console.log(jsonData);
        setInfo(jsonData.meals[0]);
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    };

    getInfo();
  }, [mealid]);

  let ingredients = [];
  if (info) {
    for (let i = 1; i <= 100; i++) {
      const ingredient = info[`strIngredient${i}`];
      if (ingredients && ingredient.trim() !== "") {
        ingredients.push(ingredient);
      } else {
        break;
      }
    }
  }

  return (
    <div className={styles["body"]}>
      {!info ? (
        "Data not found"
      ) : ( 
        <div >
          <div className={styles["line"]}>
          <h1>Recipe </h1>
          </div>
          <div className={styles["mealInfo"]}>
            <img
              className={styles["image"]}
              src={info.strMealThumb}
              alt="{info.strMeal"
            ></img>
            <div className={styles["info"]}>
              <h2>{info.strMeal}</h2> 
              <div className={styles["ingrediants"]}>
                <h3>Ingredients</h3>
                <ol>
                  {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
              <h3>Instructions</h3>

              <p>{info.strInstructions}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
