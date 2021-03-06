import Favorite from "@material-ui/icons/Favorite";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EcommerceContext from "../../context/EcommerceContext";
import { arsPaymentFormat } from "../../utils/functions/formatNumber";
import styles from "../styles/productCard.module.css";

export default function ProductCard({ info }) {
  const context = useContext(EcommerceContext);
  const [styleIcon, setStyleIcon] = useState(styles.icon);
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const [amountPayment, setAmountPayment] = useState(0);

  const handleFavorites = () => {
    if (styleIcon === styles.icon) {
      context.addFavorites({
        product: info,
        amount: 1,
      });
      setStyleIcon(styles.iconSelected);
    } else if (styleIcon === styles.iconSelected) {
      context.removeFavorites(info._id);
      setStyleIcon(styles.icon);
    }
  };

  const viewDetail = () => {
    navigate(`/product-detail/${info._id}`);
  };

  useEffect(() => {
    setPrice(arsPaymentFormat(info.price));
    setAmountPayment(arsPaymentFormat(info.price / 12));
  }, [info]);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Favorite onClick={handleFavorites} />
      </div>
      <div className={styles.containerProduct} aria-hidden onClick={viewDetail}>
        <div className={styles.headerCard}>
          <img src={info.images[0].url} alt="" />
        </div>
        <div className={styles.bodyCard}>
          <p className={styles.info}>{info.features}</p>
          <p className={styles.price}>{price}</p>
          <small className={styles.offers}>
            {`12 x ${amountPayment}
           sin interes`}
          </small>
          <small>Envio gratis</small>
        </div>
      </div>
    </div>
  );
}
