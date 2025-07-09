import React from "react";
import Navbar from "./Navbar";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles["about"]}>
      <Navbar></Navbar>
      <div className={styles["about-body"]}>
         <div className={styles["line"]}>
        <h1>About</h1>
      </div>
      <div className={styles["aboutus"]}>
        <img src="./logo.jpg"></img>
        <p>
          Mom’s Secret is a cozy recipe website where timeless family recipes
          meet modern flavors. Discover simple, tasty dishes inspired by Mom’s
          kitchen — from comforting classics to fresh homemade treats. Whether
          you’re new to cooking or love experimenting in the kitchen, Mom’s
          Secret brings you easy, step-by-step recipes to share with the people
          you love. Unlock the secrets, cook with heart, and make every meal
          special.
        </p>
      </div>
      </div>
     
    </div>
  );
};

export default About;
