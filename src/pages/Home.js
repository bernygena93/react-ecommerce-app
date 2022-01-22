/** @format */

import React, { useEffect, useState } from "react";
import { Carousel as Carousel2 } from "react-responsive-carousel";
import styles from "./styles/home.module.css";
import ProductCard from "../components/Card/ProductCard";
import listImages from "../json/listImages.json";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllProducts } from "../service/productService";
import Spinner from "../components/Spinner";
import { getAllCategories } from "../service/categoryService";
import CategoryCard from "../components/Card/CategoryCard";
import InfoHome from "../components/InfoHome";
import BrandsCard from "../components/Card/BrandsCard";
import { getAllBrands } from "../service/brandsService";
import useFetchApi from "../hooks/useFetchApi";
import MultiCarousel from "../components/MultiCarousel";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const products = useFetchApi({
    urlApi: getAllProducts,
  });
  const categories = useFetchApi({
    urlApi: getAllCategories,
  });
  const brands = useFetchApi({
    urlApi: getAllBrands,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (products.length > 0) setLoading(false);
  }, [products]);

  return loading ? (
    <div className={styles.spinnerContainer}>
      <Spinner />
    </div>
  ) : (
    <div className={styles.container}>
      <Carousel2 renderThumbs={() => false}>
        {listImages.map((image) => (
          <div key={image.id + image.url}>
            <img src={image.url} alt={`Slide - ${image.id}`} />
          </div>
        ))}
      </Carousel2>
      <InfoHome />
      <h2>Destacados de esta semana</h2>
      <MultiCarousel positionInitial={-45}>
        {products.map((product) => (
          <ProductCard key={product.id + product.brand} info={product} />
        ))}
      </MultiCarousel>
      <h2>Categorias</h2>
      <div className={styles.container}>
        {categories.map((category) => (
          <CategoryCard info={category} key={category.id + category.name} />
        ))}
      </div>
      <h2>Marcas Oficiales</h2>
      <MultiCarousel positionInitial={-70}>
        {brands.map((brand) => (
          <BrandsCard brand={brand} key={brand.id + brand.name} />
        ))}
      </MultiCarousel>
      <h2>Envio Gratis</h2>
      <MultiCarousel positionInitial={-45}>
        {products
          .filter((product) => product.shipping)
          .map((product) => (
            // eslint-disable-next-line implicit-arrow-linebreak
            <ProductCard key={product.id + product.name} info={product} />
          ))}
      </MultiCarousel>
    </div>
  );
}
