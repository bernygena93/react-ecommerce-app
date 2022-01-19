import React from "react";
import styles from "../../pages/styles/productDetail.module.css";

export default function ProductDescription({ product }) {
  return (
    <div className={styles.descriptionContainer}>
      Descripcion:
      <br />
      <br />
      {product.description?.split("<br/>").map((sentences, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <p className={styles.description} key={sentences + index}>
          {sentences}
          <br />
        </p>
      ))}
    </div>
  );
}
