import Favorite from "@material-ui/icons/Favorite";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EcommerceContext from "../../context/EcommerceContext";
import usePaymentFormat from "../../hooks/usePaymentFormat";
import styles from "../styles/cardProduct.module.css";

export default function ProductCard({ info }) {
  const context = useContext(EcommerceContext);
  const [styleIcon, setStyleIcon] = useState(styles.icon);
  const navigate = useNavigate();
  const handleFavorites = () => {
    if (styleIcon === styles.icon) {
      context.addFavorites(info);
      setStyleIcon(styles.iconSelected);
    } else if (styleIcon === styles.iconSelected) {
      context.removeFavorites(info);
      setStyleIcon(styles.icon);
    }
  };
  const price = usePaymentFormat(info.price);
  const due = usePaymentFormat(info.price / 12);

  const viewDetail = () => {
    // eslint-disable-next-line no-underscore-dangle
    navigate(`/product-detail/${info._id}`);
  };
  return (
    <div>
      <div className={styles.container} aria-hidden="true" onClick={viewDetail}>
        <div className={styleIcon}>
          <Favorite onClick={handleFavorites} />
        </div>
        <div className={styles.headerCard}>
          <img src={info.images[0].url} alt="" />
        </div>
        <div className={styles.bodyCard}>
          <p className={styles.info}>{info.model}</p>
          <p className={styles.price}>{price}</p>
          <small className={styles.offers}>{`12 x ${due} sin interes`}</small>
          <small>Envio gratis</small>
        </div>
      </div>
    </div>
  );
}
