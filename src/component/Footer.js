import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div>
        <h1>Mom's Secret</h1>
      </div>

      <div className={styles["copyright"]}>
        <p>Copyright &copy; 2025 by Aleena | All Rights Reserved.</p>
      </div>
    </footer>
  );
}; 

export default Footer;
