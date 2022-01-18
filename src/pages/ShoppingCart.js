import ShoppingCard from "../components/Card/ShoppingCard";
import styles from "./styles/shopping.module.css";

export default function ShoppingCart() {
  const products = JSON.parse(localStorage.getItem("Shopping"));

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ShoppingCard product={product} />
      ))}
      <div className={styles.totalContainer}>
        <p>Total:</p>
        <div>total</div>
      </div>
    </div>
  );
}
