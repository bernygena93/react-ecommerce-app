import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import AccountCircle from "@material-ui/icons/AccountCircle";
import styles from "../styles/navbar.module.css";
import Logo from "../../assets/Logo.png";
import LogoMobile from "../../assets/Logo-mobile.png";
import Search from "./Search";
import EcommerceContext from "../../context/EcommerceContext";
import useFetchApi from "../../hooks/useFetchApi";
import { getAllCategories } from "../../service/categoryService";
import Menu from "./Menu";
import UserMenu from "./UserMenu";

export default function Navbar({ drawerToggle }) {
  const categories = useFetchApi({
    urlApi: getAllCategories,
  });
  const [dataCategories, setDataCategories] = useState([]);
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    navigate(link);
  };

  useEffect(() => {
    const newArray = categories.map((category) => ({
      text: category.name,
      path: `filtered/category/${category.name}/${category._id}`,
    }));
    setDataCategories(newArray);
  }, [categories]);
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
            <Search />
            <div className={styles.containerNav}>
              {!context.userInfo ? (
                <nav className={styles.nav}>
                  <p
                    aria-hidden="true"
                    className={styles.buttonNav}
                    onClick={() => handleRedirect("/register")}
                  >
                    Registrarse
                  </p>
                  <p
                    aria-hidden="true"
                    className={styles.buttonNav}
                    onClick={() => handleRedirect("/login")}
                  >
                    Ingresar
                  </p>
                </nav>
              ) : (
                <>
                  <nav className={styles.nav}>
                    <AccountCircle />
                    <p>
                      {context.userInfo[0].name}
                      &nbsp;
                      {context.userInfo[0].lastname}
                    </p>
                  </nav>
                  <UserMenu redirect={handleRedirect} />
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
          <Menu dataCategories={dataCategories} />
        </div>
      )}
    </EcommerceContext.Consumer>
  );
}
