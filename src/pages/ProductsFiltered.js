import { useParams } from "react-router";
import BrandList from "../components/BrandList";
import ProductFilteredCard from "../components/Card/ProductFilteredCard";
import ProductOrdering from "../components/Product/ProductOrdering";
import useFetchApi from "../hooks/useFetchApi";
import {
  getProductByBrand,
  getProductByCategory,
} from "../service/productService";
import styles from "./styles/productsFiltered.module.css";

export default function ProductsFiltered() {
  const { id, name, type } = useParams();
  const urlApi = type === "category" ? getProductByCategory : getProductByBrand;
  const products = useFetchApi({
    urlApi,
    payload: id,
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          {products.length}
          &nbsp;resultados para tu busqueda
        </p>
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.resultContainer}>
          <p className={styles.name}>{name}</p>
          <p className={styles.resultText}>
            {products.length}
            &nbsp;resultados para tu busqueda
          </p>
        </div>
        <div className={styles.orderContainer}>
          <ProductOrdering products={products} />
        </div>
        <div className={styles.brandContainer}>
          <p className={styles.name}>Marcas</p>
          {products.map((product) => (
            <BrandList brand={product.make} />
          ))}
          <button className={styles.button} type="button">
            Filtrar
          </button>
        </div>
      </div>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <ProductFilteredCard product={product} />
        ))}
      </div>
    </div>
  );
}
