import React from "react";
import styles from "../styles/brandsCard.module.css";

export default function BrandsCard({ brand }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{brand.name}</p>
        <small>Ver Mas</small>
      </div>
      <div className={styles.logo}>
        <img src={brand.logo[0]?.url} alt="asdsa" />
      </div>
      <div className={styles.body}>
        <img src={brand.image[0].url} alt={`Slide - ${brand.image[0].id}`} />
      </div>
    </div>
  );
}
