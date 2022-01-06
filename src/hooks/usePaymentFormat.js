import { useEffect, useState } from "react";

export default function usePaymentFormat(initialNumber) {
  const [number, setNumber] = useState();

  function formatNumber(price) {
    setNumber(
      new Intl.NumberFormat("ES-AR", {
        style: "currency",
        currency: "ARS",
      }).format(price)
    );
  }

  useEffect(() => {
    formatNumber(initialNumber);
  }, [initialNumber]);

  return number;
}
