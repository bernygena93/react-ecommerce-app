import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { arsPaymentFormat } from "../../utils/functions/formatNumber";
import styles from "../styles/productFilteredCard.module.css";

export default function ProductFilteredCard({ product }) {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = () => {
    // eslint-disable-next-line no-underscore-dangle
    navigate(`/product-detail/${product._id}`);
  };

  useEffect(() => {
    setPrice(arsPaymentFormat(product.price));
  }, [product]);
  return (
    <div
      className={styles.container}
      aria-hidden="true"
      onClick={handleNavigate}
    >
      <div className={styles.imgContainer}>
        <img src={product.images[0].url} alt={product.images[0].id} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.model}>{product.features}</div>
        <div>
          {product.shipping ? (
            <p className={styles.shipping}>Envio Gratis</p>
          ) : (
            <div>Envio Disponible</div>
          )}
        </div>
      </div>
      <div className={styles.priceContainer}>
        <p className={styles.price}>{price}</p>
        <button className={styles.button} type="button">
          <AddShoppingCart />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
