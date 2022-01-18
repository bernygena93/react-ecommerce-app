import styles from "../styles/productOrdering.module.css";

export default function ProductOrdering() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Ordenar</p>
      <select className={styles.select} value="">
        <option className={styles.option} value="" selected disabled hidden>
          Ordenar por precio
        </option>
        <option className={styles.option} value="higher">
          De menor a mayor
        </option>
        <option className={styles.option} value="lower">
          De mayor a menor
        </option>
      </select>

      <button className={styles.button} type="button">
        Ordenar
      </button>
    </div>
  );
}
