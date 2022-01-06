import React from "react";
import styles from "../../pages/styles/detailProducts.module.css";

export default function ProductDescription({ product }) {
  return (
    <div className={styles.descriptionContainer}>
      Descripcion:
      <br />
      <br />
      {product.description.split("<br/>").map((sentences) => (
        <p className={styles.description}>
          {sentences}
          <br />
        </p>
      ))}
    </div>
  );
}
