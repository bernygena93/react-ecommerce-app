import { useNavigate, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import AccountCircle from "@material-ui/icons/AccountCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Favorite, ShoppingCartOutlined } from "@material-ui/icons";
import styles from "../styles/navbar.module.css";
import Logo from "../../assets/Logo.png";
import LogoMobile from "../../assets/Logo-mobile.png";
import Search from "./Search";
import EcommerceContext from "../../context/EcommerceContext";

export default function Navbar({ drawerToggle }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleRedirect = (link) => {
    navigate(link);
  };
  return (
    <EcommerceContext.Consumer>
      {(context) => (
        <div className={styles.container}>
          <div className={styles.navbar}>
            <img
              className={styles.logo}
              src={Logo}
              alt="React-Ecommerce"
              aria-hidden="true"
              onClick={() => handleRedirect("/")}
            />
            <img
              className={styles.logoMobile}
              src={LogoMobile}
              alt="React-Ecommerce"
              aria-hidden="true"
              onClick={() => handleRedirect("/")}
            />
            {pathname !== "/login" && pathname !== "/register" && <Search />}
            <div className={styles.containerNav}>
              {!context.userInfo ? (
                <nav className={styles.nav}>
                  <p
                    aria-hidden="true"
                    onClick={() => handleRedirect("/register")}
                  >
                    Crear Cuenta
                  </p>
                  <p
                    aria-hidden="true"
                    onClick={() => handleRedirect("/login")}
                  >
                    Iniciar Sesión
                  </p>
                </nav>
              ) : (
                <>
                  <nav className={styles.nav}>
                    <AccountCircle />
                    <p>
                      {context.userInfo.name}
                      &nbsp;
                      {context.userInfo.lastname}
                    </p>
                  </nav>
                  <div className={styles.icons}>
                    <ShoppingCartOutlined />
                    <Favorite />
                    <KeyboardArrowDownIcon />
                  </div>
                </>
              )}
              <div
                role="button"
                className={styles.icon}
                onClick={drawerToggle}
                aria-hidden="true"
              >
                <ReorderIcon />
              </div>
            </div>
          </div>
          <div className={styles.navbar2}>
            <p>
              Categorias
              <KeyboardArrowDownIcon />
            </p>
            <p>Vender Producto</p>
            <p>Mis Productos</p>
          </div>
        </div>
      )}
    </EcommerceContext.Consumer>
  );
}
