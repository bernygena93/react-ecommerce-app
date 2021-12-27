import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import styles from "../styles/navbar.module.css";
import Logo from "../../assets/Logo.png";
import Search from "./Search";

export default function Navbar({ drawerToggle }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleRedirect = (link) => {
    navigate(link);
  };
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img
          className={styles.logo}
          src={Logo}
          alt="React-Ecommerce"
          aria-hidden="true"
          onClick={() => handleRedirect("/")}
        />
        <nav className={styles.nav}>
          <p aria-hidden="true" onClick={() => handleRedirect("/register")}>
            Crear Cuenta
          </p>
          <p aria-hidden="true" onClick={() => handleRedirect("/login")}>
            Iniciar Sesión
          </p>
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
      {pathname !== "/login" && pathname !== "/register" && <Search />}
    </div>
  );
}
