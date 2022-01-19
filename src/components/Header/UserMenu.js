import { Favorite, ShoppingCartOutlined } from "@material-ui/icons";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import React from "react";
import useOutsideSelect from "../../hooks/useOutsideSelect";
import { DROPDOWN_USERS } from "../../utils/constants/dropdownOptions";
import Dropdown from "../Dropdown/Dropdown";
import styles from "../styles/navbar.module.css";

export default function UserMenu({ redirect }) {
  const { ref, isVisible, setIsVisible } = useOutsideSelect();
  return (
    <div className={styles.icons} ref={ref} aria-hidden="true">
      <ShoppingCartOutlined onClick={() => redirect("/shopping-cart")} />
      <Favorite onClick={() => redirect("/favorites")} />
      <KeyboardArrowDown onClick={() => setIsVisible(!isVisible)} />
      <Dropdown
        position={{
          top: 11,
          left: 82,
        }}
        items={DROPDOWN_USERS}
        visible={isVisible}
        setVisible={setIsVisible}
      />
    </div>
  );
}
