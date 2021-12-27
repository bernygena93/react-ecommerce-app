import React from "react";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h4>©2021 React-Ecommerce</h4>
      <div>
        <a href="https://facebook.com" className={styles.drawerLinks}>
          <Facebook />
        </a>
        <a href="https://linkedin.com/" className={styles.drawerLinks}>
          <LinkedIn />
        </a>
        <a href="https://twitter.com/" className={styles.drawerLinks}>
          <Twitter />
        </a>
        <a href="https://instagram.com/" className={styles.drawerLinks}>
          <Instagram />
        </a>
      </div>
    </footer>
  );
}
