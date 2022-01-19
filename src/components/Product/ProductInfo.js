import { CheckCircle } from "@material-ui/icons";
import React from "react";
import styles from "../../pages/styles/productDetail.module.css";
import PaymentMethods from "./PaymentMethods";
import ProductShipping from "./ProductShipping";

export default function ProductInfo({ product }) {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.bodyProduct}>
        <PaymentMethods product={product} />
        <p className={styles.stock}>
          <CheckCircle />
          {`Stock: ${product.stock}`}
        </p>
        <ProductShipping />
      </div>
    </div>
  );
}
