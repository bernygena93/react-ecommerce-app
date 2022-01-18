import React, { useEffect, useState } from "react";
import CreditCard from "@material-ui/icons/CreditCard";
import styles from "../../pages/styles/detailProducts.module.css";
import { arsPaymentFormat } from "../../utils/functions/formatNumber";

export default function PaymentMethods({ product }) {
  const [amountPayment, setAmountPayment] = useState(0);

  useEffect(() => {
    setAmountPayment(arsPaymentFormat(product.price / 12));
  }, [product]);
  return (
    <div className={styles.paymentContainer}>
      <CreditCard />
      <div className={styles.payment}>
        <p className={styles.title}>{` 12 x ${amountPayment} sin interes`}</p>
        <p className={styles.subtitle}>Pagando el precio de lista</p>
      </div>
    </div>
  );
}
