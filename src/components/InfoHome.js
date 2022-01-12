import React from "react";
import {
  LocationOn,
  CreditCard,
  LocalShippingOutlined,
  Lock,
} from "@material-ui/icons";
import styles from "./styles/infoHome.module.css";

export default function InfoHome() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.containerIcon}>
          <CreditCard className={styles.icon} fontSize="large" />
        </div>
        <div className={styles.containerText}>
          <p>¡Cuotas sin interés!</p>
          <small>12 y 18 cuotas fijas en productos seleccionados</small>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.containerIcon}>
          <LocalShippingOutlined className={styles.icon} fontSize="large" />
        </div>
        <div className={styles.containerText}>
          <p>Envíos a todo el país</p>
          <small>Seguí tu compra en tiempo real, es rápido y seguro</small>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.containerIcon}>
          <LocationOn className={styles.icon} fontSize="large" />
        </div>
        <div className={styles.containerText}>
          <p>¡Retirá gratis!</p>
          <small>En sucursales express seleccionadas</small>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.containerIcon}>
          <Lock className={styles.icon} fontSize="large" />
        </div>
        <div className={styles.containerText}>
          <p>Compra Segura</p>
          <small>Comprá sin limites, nosotros te cuidamos</small>
        </div>
      </div>
    </div>
  );
}
