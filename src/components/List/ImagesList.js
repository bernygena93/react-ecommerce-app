import React from "react";
import styles from "../styles/imagesList.module.css";

export default function ImagesList({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={item.url} alt="" />
      </div>
      <div className={styles.text}>
        <p>{item.url}</p>
      </div>
    </div>
  );
}
