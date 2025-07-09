import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles["header"]}>
      
      <img className={styles["imglogo"]} src="/logononame.jpg" alt="Image"></img>      
      <nav className={styles["navbar"]}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/mail">Mail</a>
      </nav>
    </header>
  );
};

export default Navbar;
 