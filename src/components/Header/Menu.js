import React from "react";
import LocalShipping from "@material-ui/icons/LocalShipping";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "../styles/navbar.module.css";
import Dropdown from "../Dropdown/Dropdown";
import useOutsideSelect from "../../hooks/useOutsideSelect";

export default function Menu({ dataCategories }) {
  const { ref, isVisible, setIsVisible } = useOutsideSelect();

  return (
    <div className={styles.navbar2} ref={ref} aria-hidden="true">
      <p className={styles.optionNavbar}>
        <LocalShipping />
        Envio a todo el pais
      </p>
      <p className={styles.optionNavbar}>
        Categorias
        <KeyboardArrowDownIcon onClick={() => setIsVisible(!isVisible)} />
        <Dropdown
          position={{
            top: 85,
            left: -5,
          }}
          items={dataCategories}
          visible={isVisible}
          setVisible={setIsVisible}
        />
      </p>
      <p className={styles.optionNavbar}>Vender Producto</p>
      <p className={styles.optionNavbar}>Mis Productos</p>
    </div>
  );
}
