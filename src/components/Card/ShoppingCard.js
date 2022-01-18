import React from "react";
import styles from "../styles/shoppingCard.module.css";
import { arsPaymentFormat } from "../../utils/functions/formatNumber";

export default function ShoppingCard({ product }) {
  const payment = arsPaymentFormat(product.product.price * product.amount);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={product.product.images[0].url}
          alt={product.product.images[0].id}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.brand}>{product.product.make}</div>
        <div className={styles.model}>{product.product.model}</div>
        <div className={styles.amount}>
          Cantidad:&nbsp;
          {product.amount}
        </div>
        <div className={styles.price}>{payment}</div>
      </div>
    </div>
  );
}
