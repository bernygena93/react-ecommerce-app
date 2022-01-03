import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "../styles/search.module.css";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type=""
          name=""
          value={search}
          className={styles.inputSearch}
          placeholder=" Buscar Poductos, marcas y mas"
          onChange={handleChange}
        />
        <div className={styles.icon}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
