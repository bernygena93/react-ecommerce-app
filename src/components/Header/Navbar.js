import { useNavigate, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import AccountCircle from "@material-ui/icons/AccountCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "../styles/navbar.module.css";
import Logo from "../../assets/Logo.png";
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
            {!context.userInfo ? (
              <nav className={styles.nav}>
                <p
                  aria-hidden="true"
                  onClick={() => handleRedirect("/register")}
                >
                  Crear Cuenta
                </p>
                <p aria-hidden="true" onClick={() => handleRedirect("/login")}>
                  Iniciar Sesión
                </p>
              </nav>
            ) : (
              <nav className={styles.nav}>
                <AccountCircle />
                <p>
                  {context.userInfo.name}
                  &nbsp;
                  {context.userInfo.lastname}
                </p>
                <KeyboardArrowDownIcon />
              </nav>
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
          {pathname !== "/login" && pathname !== "/register" && <Search />}
        </div>
      )}
    </EcommerceContext.Consumer>
  );
}
