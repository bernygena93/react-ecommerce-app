import { useLocation } from "react-router-dom";
import styles from "../styles/shoppingCard.module.css";
import { arsPaymentFormat } from "../../utils/functions/formatNumber";

export default function ShoppingCard({ handleDelete, product }) {
  const { pathname } = useLocation();
  const payment = arsPaymentFormat(product.product.price * product.amount);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={product.product.images[0].url}
          alt={product.product.images[0].id}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.model}>{product.product.model}</p>
        <div className={styles.amountContainer}>
          {pathname === "/shopping-cart" && (
            <div className={styles.amount}>
              Cantidad:&nbsp;
              {product.amount}
            </div>
          )}
          <p className={styles.price}>{payment}</p>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleDelete(product.product._id)}
          >
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
}
