/** @format */

import React, { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-material-ui-carousel";
import styles from "./styles/home.module.css";
import ProductCard from "../components/Card/ProductCard";
import listImages from "../json/listImages.json";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllProducts } from "../service/productService";
import Spinner from "../components/Spinner";
import { getAllCategories } from "../service/categoryService";
import CategoryCard from "../components/Card/CategoryCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getAllProducts();
        setProducts(data.data);
        setLoading(false);
      } catch (e) {
        console.log("error", e);
      }
    }
    async function fetchCategory() {
      try {
        const data = await getAllCategories();
        setCategories(data.data);
      } catch (e) {
        console.log("error", e);
      }
    }
    fetchProduct();
    fetchCategory();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className={styles.container}>
          <Carousel>
            {listImages.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt={`Slide - ${image.id}`} />
              </div>
            ))}
          </Carousel>
          <h2>Categorias</h2>
          <div className={styles.container}>
            {categories.map((category) => (
              <CategoryCard info={category} key={category.id} />
            ))}
          </div>
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
