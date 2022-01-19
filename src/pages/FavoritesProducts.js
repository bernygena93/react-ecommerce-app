import { useContext, useEffect, useState } from "react";
import ShoppingCard from "../components/Card/ShoppingCard";
import styles from "./styles/shopping.module.css";
import EcommerceContext from "../context/EcommerceContext";

export default function FavoritesProducts() {
  const context = useContext(EcommerceContext);
  const [products, setProducts] = useState(context.favorites);

  const handleDelete = (id) => {
    context.removeFavorites(id);
  };

  useEffect(() => {
    setProducts(context.favorites);
  }, [context]);

  return (
    <div className={styles.container}>
      {!products || products.length === 0 ? (
        <p>No tienes productos favoritos</p>
      ) : (
        products.map((product) => (
          <ShoppingCard product={product} handleDelete={handleDelete} />
        ))
      )}
    </div>
  );
}
