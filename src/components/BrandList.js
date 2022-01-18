import React from "react";
import styles from "./styles/brandList.module.css";

export default function BrandList({ brand }) {
  return (
    <div className={styles.container}>
      <input type="checkbox" name="brand" value={brand} />
      <p className={styles.name}>{brand}</p>
    </div>
  );
}
