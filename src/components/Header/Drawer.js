import React from "react";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import Clear from "@material-ui/icons/Clear";
import styles from "../styles/drawer.module.css";

export default function Drawer({ drawerToggle, drawerOpen }) {
  const activeDrawer = drawerOpen ? styles.drawerOpen : "";

  const handleClick = () => {
    drawerToggle();
  };

  return (
    <div className={`${styles.drawer} ${activeDrawer}`}>
      <div
        role="button"
        className={styles.drawerTop}
        onClick={drawerToggle}
        aria-hidden="true"
      >
        <Clear />
        <h2 className={styles.menuTitle}>MENÚ</h2>
      </div>
      <nav>
        <ul type="none">
          <li className={styles.drawerLinks}>Crear cuenta</li>
          <li className={styles.drawerLinks}>Iniciar sesión</li>
        </ul>
      </nav>
      <div className={styles.drawerBottom}>
        <div className={styles.socialMediaIconsDrawer}>
          <a
            href="https://facebook.com"
            onClick={handleClick}
            className={styles.drawerLinks}
          >
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
      </div>
    </div>
  );
}
