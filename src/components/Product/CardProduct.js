import React from "react";
import styles from "../styles/cardProduct.module.css";

export default function CardProduct({ info }) {
  return (
    <div>
      <div className={styles.container}>
        <img src={info.image} alt="" />
        <div className={styles.bodyCard}>
          <p className={styles.info}>{`${info.mark}-${info.model}`}</p>
          <h4 className={styles.price}>{`$ ${info.price}`}</h4>
          <small className={styles.offers}>
            {`12 x ${(info.price / 12).toFixed(2)} sin interes`}
          </small>
          <small>Envio gratis</small>
        </div>
      </div>
    </div>
  );
}
