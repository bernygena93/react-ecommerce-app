/** @format */

import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./styles/home.module.css";
import ProductCard from "../components/Product/ProductCard";
// import listProducts from "../json/listProducts.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllProducts } from "../service/productService";
import Spinner from "../components/Spinner";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      try {
        const data = await getAllProducts();
        setProducts(data.data);
        setLoading(false);
      } catch (e) {
        console.log("error", e);
      }
    }
    fetch();
  }, [products]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className={styles.container}>
          <Carousel renderThumbs={() => false}>
            <div>
              <img
                src="https://warehousepc.com.pe/wp-content/uploads/2021/01/arma-tu-pc-gamer-warehouse-peru.jpg"
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                src="https://warehousepc.com.pe/wp-content/uploads/2021/01/arma-tu-pc-gamer-warehouse-peru.jpg"
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                src="https://warehousepc.com.pe/wp-content/uploads/2021/01/arma-tu-pc-gamer-warehouse-peru.jpg"
                alt="Slide 3"
              />
            </div>
          </Carousel>
          <h2>Destacados de esta semana</h2>
          <div className={styles.container}>
            {products.map((product) => (
              <ProductCard key={product.id} info={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
