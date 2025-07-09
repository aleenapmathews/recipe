import React, { useState } from "react";
import Mealcards from "./Mealcards";
import styles from "./mainPage.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === "") {
      setMsg("please enter something");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      // console.log(jsonData.meals);
      setData(jsonData.meals);
      setMsg("");
    }
  };

  // console.log(data);

  return (
    <div className={styles["page-wrapper"]}>
      <Navbar></Navbar>
      <div className={styles["main-content"]}> 
        <div className={styles["heading"]}>
          <h1>Mom's Secret</h1>
        </div>

        <div className={styles["body"]}>
          <div className={styles["container"]}>
            <div className={styles["searchBar"]}>
              <input
                type="text"
                placeholder="Enter Dish"
                onChange={handleInput}
                className={styles["input"]}
              ></input>
              <button onClick={myFun}>Search</button>
            </div>
            <h4>{msg}</h4>
            <div>
              <Mealcards detail={data} />
            </div>
          </div>
        </div>
      </div> 
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainPage;
