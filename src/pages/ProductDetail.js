/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import { Favorite } from "@material-ui/icons";
import { Rating } from "react-simple-star-rating";
// import listProducts from "../json/listProducts.json";
import styles from "./styles/detailProducts.module.css";
import EcommerceContext from "../context/EcommerceContext";
import { getProductById } from "../service/productService";
import Spinner from "../components/Spinner";
import ProductWarranty from "../components/Product/ProductWarranty";
import ProductDescription from "../components/Product/ProductDescription";
import ProductInfo from "../components/Product/ProductInfo";
import usePaymentFormat from "../hooks/usePaymentFormat";

export default function ProductDetail() {
  const [loading, setLoading] = useState(true);
  const context = useContext(EcommerceContext);
  // eslint-disable-next-line object-curly-newline
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const price = usePaymentFormat(product.price);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getProductById(id);
        setProduct(data.data);
        setLoading(false);
        console.log(product);
      } catch (e) {
        console.log("error", e);
      }
    }
    fetch();
  }, [id]);

  const countProduct = (op) => {
    if (op === "remove" && count > 0) {
      setCount((prevState) => prevState - 1);
    } else if (op === "add" && count < product.stock) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleShopping = () => {
    context.addToCart("product");
    console.log("add");
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.productHeader}>
              <p className={styles.make}>
                {`${product.make} - ${product.model}`}
                <Favorite />
              </p>
              <div className={styles.rating}>
                <Rating size={16} initialValue={product.rating} readonly />
              </div>
              <Carousel className={styles.carousel}>
                {product.images?.map((image) => (
                  <div key={image.id}>
                    <img className={styles.img} src={image.url} alt="Slide 1" />
                  </div>
                ))}
              </Carousel>
              {window.innerWidth > 1279 && (
                <ProductDescription product={product} />
              )}
            </div>
            <div className={styles.containerProduct}>
              <p className={styles.price}>{price}</p>
              <ProductInfo product={product} />
              <div className={styles.options}>
                <div className={styles.count}>
                  <div
                    className={styles.function}
                    aria-hidden="true"
                    onClick={() => countProduct("remove")}
                  >
                    <Remove />
                  </div>
                  <p className={styles.result}>{count}</p>
                  <div
                    className={styles.function}
                    aria-hidden="true"
                    onClick={() => countProduct("add")}
                  >
                    <Add />
                  </div>
                </div>
                <button type="button" className={styles.button}>
                  <AddShoppingCart onClick={handleShopping} />
                  Agregar al carrito
                </button>
                <ProductWarranty />
                {window.innerWidth < 1280 && (
                  <ProductDescription product={product} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
