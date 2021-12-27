/** @format */ import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import styles from "../styles/navbar.module.css";
import Logo from "../../assets/Logo.png";
import Search from "./Search";

export default function Navbar({ drawerToggle }) {
  return (
    <>
      <div className={styles.navbar}>
        <img className={styles.logo} src={Logo} alt="React-Ecommerce" />
        <nav className={styles.nav}>
          <p>Crear Cuenta</p>
          <p>Iniciar Sesión</p>
        </nav>
        <div
          role="button"
          className={styles.icon}
          onClick={drawerToggle}
          aria-hidden="true"
        >
          <ReorderIcon />
        </div>
      </div>
      <Search />
    </>
  );
}
