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
  const products = useFetchApi({
    urlApi: getAllProducts,
  });
  const categories = useFetchApi({
    urlApi: getAllCategories,
  });
  const brands = useFetchApi({
    urlApi: getAllBrands,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (products) setLoading(false);
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
          <Carousel2 renderThumbs={() => false}>
            {listImages.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt={`Slide - ${image.id}`} />
              </div>
            ))}
          </Carousel2>
          <InfoHome />
          <h2>Destacados de esta semana</h2>
          <MultiCarousel>
            {products.map((product) => (
              <ProductCard key={product.id} info={product} />
            ))}
          </MultiCarousel>
          <h2>Categorias</h2>
          <div className={styles.container}>
            {categories.map((category) => (
              <CategoryCard info={category} key={category.id} />
            ))}
          </div>
          <h2>Marcas Oficiales</h2>
          <MultiCarousel>
            {brands.map((brand) => (
              <BrandsCard brand={brand} key={brand.id} />
            ))}
          </MultiCarousel>
          <h2>Envio Gratis</h2>
          <MultiCarousel>
            {products.map(
              (product) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                product.shipping && (
                  <ProductCard key={product.id} info={product} />
                )
            )}
          </MultiCarousel>
        </div>
      )}
    </>
  );
}
