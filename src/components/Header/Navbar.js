import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import AccountCircle from "@material-ui/icons/AccountCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Favorite, ShoppingCartOutlined } from "@material-ui/icons";
import LocalShipping from "@material-ui/icons/LocalShipping";
import styles from "../styles/navbar.module.css";
import Logo from "../../assets/Logo.png";
import LogoMobile from "../../assets/Logo-mobile.png";
import Search from "./Search";
import EcommerceContext from "../../context/EcommerceContext";
import Dropdown from "../Dropdown/Dropdown";
import { DROPDOWN_USERS } from "../../utils/dropdownOptions";
import useFetchApi from "../../hooks/useFetchApi";
import { getAllCategories } from "../../service/categoryService";
import useOutsideSelect from "../../hooks/useOutsideSelect";

export default function Navbar({ drawerToggle }) {
  const categories = useFetchApi({
    urlApi: getAllCategories,
  });
  const [dataCategories, setDataCategories] = useState([]);
  // const [isActivated, setIsActivated] = useState(false);
  const [isActivatedCategories, setIsActivatedCategories] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { ref, isVisible, setIsVisible } = useOutsideSelect();

  const handleRedirect = (link) => {
    navigate(link);
  };

  const handleVisible = (info) => {
    if (info === "user") setIsVisible(!isVisible);
    else setIsActivatedCategories(!isActivatedCategories);
  };

  useEffect(() => {
    const newArray = categories.map((category) => ({
      text: category.name,
      // eslint-disable-next-line no-underscore-dangle
      path: `category/${category._id}`,
    }));
    setDataCategories(newArray);
  }, [categories]);
  return (
    <EcommerceContext.Consumer>
      {(context) => (
        <div className={styles.container} ref={ref}>
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
                      {context.userInfo.name}
                      &nbsp;
                      {context.userInfo.lastname}
                    </p>
                  </nav>
                  <div className={styles.icons}>
                    <ShoppingCartOutlined />
                    <Favorite />
                    <KeyboardArrowDownIcon
                      onClick={() => handleVisible("user")}
                    />
                    <Dropdown
                      items={DROPDOWN_USERS}
                      visible={isVisible}
                      setVisible={setIsVisible}
                    />
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
            <p className={styles.optionNavbar}>
              <LocalShipping />
              Envio a todo el pais
            </p>
            <p className={styles.optionNavbar}>
              Categorias
              <KeyboardArrowDownIcon onClick={handleVisible} />
              <Dropdown
                items={dataCategories}
                visible={isActivatedCategories}
                setVisible={setIsActivatedCategories}
              />
            </p>
            <p className={styles.optionNavbar}>Vender Producto</p>
            <p className={styles.optionNavbar}>Mis Productos</p>
          </div>
        </div>
      )}
    </EcommerceContext.Consumer>
  );
}
