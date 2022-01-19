import { useContext, useEffect, useState } from "react";
import { Payment } from "@material-ui/icons/";
import ShoppingCard from "../components/Card/ShoppingCard";
import { arsPaymentFormat } from "../utils/functions/formatNumber";
import styles from "./styles/shopping.module.css";
import EcommerceContext from "../context/EcommerceContext";

export default function ShoppingCart() {
  const context = useContext(EcommerceContext);
  const [products, setProducts] = useState(context.shopping);
  const total = arsPaymentFormat(
    products
      .map((product) => product.amount * product.product.price)
      .reduce((prev, curr) => prev + curr, 0)
  );

  const handleDelete = (id) => {
    context.removeToCart(id);
  };

  useEffect(() => {
    setProducts(context.shopping);
  }, [context]);

  return (
    <div className={styles.container}>
      {!products || products.length === 0 ? (
        <p>No tienes productos en el carrito</p>
      ) : (
        products.map((product) => (
          <ShoppingCard product={product} handleDelete={handleDelete} />
        ))
      )}
      <div className={styles.totalContainer}>
        <p className={styles.text}>Total:</p>
        <div className={styles.total}>
          <p className={styles.text}>{total}</p>
          <button type="button" className={styles.button}>
            <Payment />
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
