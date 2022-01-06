import React from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import styles from "../../pages/styles/detailProducts.module.css";

export default function ProductWarranty() {
  return (
    <div className={styles.warrantyContainer}>
      <VerifiedUserIcon />
      <div className={styles.warranty}>
        <p className={styles.title}>Garantia</p>
        <p className={styles.title}>Compra protegida por React Ecommerce</p>
        <p className={styles.subtitle}>Comprá sin limites,</p>
        <p className={styles.subtitle}>nosotros te cuidamos</p>
        <p className={styles.title}>Garantía del vendedor</p>
        <p className={styles.subtitle}>12 meses</p>
      </div>
    </div>
  );
}
