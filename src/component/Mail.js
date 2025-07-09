import React from 'react'
import Navbar from './Navbar'
import styles from "./mail.module.css"

const Mail = () => {
  return (
    <div className={styles["mail"]}>
      <Navbar></Navbar>
      <div className={styles["line"]}>
        <h1>Mail</h1>
      </div>
    </div>
  )
}

export default Mail