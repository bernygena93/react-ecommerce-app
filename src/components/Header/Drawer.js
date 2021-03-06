import { useNavigate } from "react-router";
import { useContext } from "react";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import Clear from "@material-ui/icons/Clear";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  Favorite,
  ShoppingCart,
  ExitToApp,
  PersonAdd,
  ExitToAppOutlined,
} from "@material-ui/icons";
import styles from "../styles/drawer.module.css";
import EcommerceContext from "../../context/EcommerceContext";

export default function Drawer({ drawerToggle, drawerOpen }) {
  const usecontext = useContext(EcommerceContext);
  const activeDrawer = drawerOpen ? styles.drawerOpen : "";
  const navigate = useNavigate();

  const handleClick = () => {
    drawerToggle();
  };

  const handleRedirect = (link) => {
    drawerToggle();
    navigate(link);
  };

  const handleLogout = () => {
    usecontext.logoutUser();
    drawerToggle();
    navigate("/");
  };

  return (
    <EcommerceContext.Consumer>
      {(context) => (
        <div className={`${styles.drawer} ${activeDrawer}`}>
          <div
            role="button"
            className={styles.drawerTop}
            onClick={drawerToggle}
            aria-hidden="true"
          >
            <Clear />
            {!context.userInfo ? (
              <h2 className={styles.menuTitle}>MENÚ</h2>
            ) : (
              <h3 className={styles.menuTitle}>
                {context.userInfo[0].name}
                &nbsp;
                {context.userInfo[0].lastname}
                <AccountCircle />
              </h3>
            )}
          </div>
          {!context.userInfo ? (
            <nav>
              <ul type="none">
                <li
                  className={styles.drawerLinks}
                  aria-hidden="true"
                  onClick={() => handleRedirect("/register")}
                >
                  Crear cuenta &nbsp;
                  <PersonAdd />
                </li>
                <li
                  className={styles.drawerLinks}
                  aria-hidden="true"
                  onClick={() => handleRedirect("/login")}
                >
                  Iniciar sesión &nbsp;
                  <ExitToAppOutlined />
                </li>
              </ul>
            </nav>
          ) : (
            <nav>
              <ul type="none">
                <li
                  className={styles.drawerLinks}
                  aria-hidden="true"
                  onClick={() => handleRedirect("/shopping-cart")}
                >
                  Carrito de Compras &nbsp;
                  <ShoppingCart />
                </li>
                <li
                  className={styles.drawerLinks}
                  aria-hidden="true"
                  onClick={() => handleRedirect("/favorites")}
                >
                  Mis Favoritos &nbsp;
                  <Favorite />
                </li>
                <li
                  className={styles.drawerLinks}
                  aria-hidden="true"
                  onClick={handleLogout}
                >
                  Salir &nbsp;
                  <ExitToApp />
                </li>
              </ul>
            </nav>
          )}

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
      )}
    </EcommerceContext.Consumer>
  );
}
