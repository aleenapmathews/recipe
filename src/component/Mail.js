import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import styles from "./mail.module.css";

const Mail = () => {
  useEffect(() => {
    emailjs.init("zqoTFikAyzH_MW5VZ");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ifwjv6a", "template_qtocxp7", e.target)
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        alert("Failed to send message");
        console.error(error);
      });
  };

  return (
    <div className={styles.mail}>
      <Navbar />

      <div className={styles.line}>
        <h1>Mail</h1>
      </div>

      <div className={styles["contact-form"]}>
        <form onSubmit={sendEmail}>
          <p>
            We'd love to hear from you!
            <br />
            Let's get in touch
          </p>

          <div className={styles["form-group"]}>
            <label>Your Name</label>
            <input type="text" name="name" required />
          </div>

          <div className={styles["form-group"]}>
            <label>Your Email</label>
            <input type="email" name="email" required />
          </div>

          <div className={styles["form-group"]}>
            <label>Message</label>
            <textarea name="message" rows="5" required />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
