import React from "react";
import LocalShipping from "@material-ui/icons/LocalShipping";
import styles from "../../pages/styles/detailProducts.module.css";

export default function ProductShipping() {
  return (
    <div className={styles.shippingContainer}>
      <LocalShipping />
      <div className={styles.shipping}>
        <p className={styles.title}>Envio a todo el pais</p>
        <p className={styles.subtitle}>
          Recibilo en tu domicilio, es rapido y seguro
        </p>
      </div>
    </div>
  );
}
