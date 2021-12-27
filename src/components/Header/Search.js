import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "../styles/search.module.css";

export default function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type=""
          name=""
          value=""
          className={styles.inputSearch}
          placeholder=" Buscar Poductos, marcas, modelos y mas"
        />
        <SearchIcon />
      </div>
    </div>
  );
}
