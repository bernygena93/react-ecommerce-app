import React from "react";
import styles from "../styles/cardProduct.module.css";

export default function CardProduct({ info }) {
  return (
    <div>
      <div className={styles.container}>
        <img src={info.imagen} alt="" />
        <div className={styles.bodyCard}>
          <p className={styles.info}>{`${info.marca}-${info.modelo}`}</p>
          <h4 className={styles.price}>{`$ ${info.precio}`}</h4>
          <small className={styles.offers}>
            {`12 x ${(info.precio / 12).toFixed(2)} sin interes`}
          </small>
          <small>Envio gratis</small>
        </div>
      </div>
    </div>
  );
}
