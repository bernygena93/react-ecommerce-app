import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Favorite, ShoppingCart } from "@material-ui/icons";
import styles from "../styles/search.module.css";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        Categorias
        <KeyboardArrowDownIcon />
      </div>
      <div className={styles.inputContainer}>
        <input
          type=""
          name=""
          value={search}
          className={styles.inputSearch}
          placeholder=" Buscar Poductos, marcas, modelos y mas"
          onChange={handleChange}
        />
        <div className={styles.icon}>
          <SearchIcon />
        </div>
      </div>
      <div className={styles.icons}>
        <ShoppingCart />
        <Favorite />
      </div>
    </div>
  );
}
