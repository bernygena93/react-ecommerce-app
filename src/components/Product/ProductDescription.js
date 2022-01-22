import React from "react";
import styles from "../../pages/styles/productDetail.module.css";

export default function ProductDescription({ product, styleContainer }) {
  return (
    <div className={styleContainer}>
      Descripcion:
      <br />
      <br />
      {product.description?.split("\n").map((sentences, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <p className={styles.description} key={sentences + index}>
          {sentences}
          <br />
        </p>
      ))}
    </div>
  );
}
