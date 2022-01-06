import React from "react";
import CreditCard from "@material-ui/icons/CreditCard";
import styles from "../../pages/styles/detailProducts.module.css";
import usePaymentFormat from "../../hooks/usePaymentFormat";

export default function PaymentMethods({ product }) {
  const price = usePaymentFormat(product.price / 12);

  return (
    <div className={styles.paymentContainer}>
      <CreditCard />
      <div className={styles.payment}>
        <p className={styles.title}>{` 12 x ${price} sin interes`}</p>
        <p className={styles.subtitle}>Pagando el precio de lista</p>
      </div>
    </div>
  );
}
