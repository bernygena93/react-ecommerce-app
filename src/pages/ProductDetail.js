import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import { Favorite } from "@material-ui/icons";
import { Rating } from "react-simple-star-rating";
import styles from "./styles/productDetail.module.css";
import EcommerceContext from "../context/EcommerceContext";
import { getProductById } from "../service/productService";
import Spinner from "../components/Spinner";
import ProductWarranty from "../components/Product/ProductWarranty";
import ProductDescription from "../components/Product/ProductDescription";
import ProductInfo from "../components/Product/ProductInfo";
import useFetchApi from "../hooks/useFetchApi";
import { arsPaymentFormat } from "../utils/functions/formatNumber";

export default function ProductDetail() {
  const [enabled, setEnabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [styleIcon, setStyleIcon] = useState(styles.icon);
  const context = useContext(EcommerceContext);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const product = useFetchApi({
    urlApi: getProductById,
    payload: id,
  });
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (product) {
      setPrice(arsPaymentFormat(product.price));
      setLoading(false);
    }
  }, [product]);

  const handleFavorites = () => {
    if (styleIcon === styles.icon) {
      context.addFavorites({
        product,
        amount: 1,
      });
      setStyleIcon(styles.iconSelected);
    } else if (styleIcon === styles.iconSelected) {
      context.removeFavorites(product._id);
      setStyleIcon(styles.icon);
    }
  };

  const countProduct = (op) => {
    if (op === "remove" && count > 0) {
      setCount((prevState) => prevState - 1);
    } else if (op === "add" && count < product.stock) {
      setCount((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (count > 0) setEnabled(false);
    else setEnabled(true);
  }, [count]);

  const handleShopping = () => {
    context.addToCart({
      product,
      amount: count,
    });
  };

  return loading ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.productHeader}>
          <p className={styles.make}>
            {`${product.make} - ${product.model}`}
            <div className={styleIcon}>
              <Favorite onClick={handleFavorites} />
            </div>
          </p>
          <div className={styles.rating}>
            <Rating size={16} initialValue={product.rating} readonly />
          </div>
          <Carousel className={styles.carousel}>
            {product.images?.map((image) => (
              <div key={image.id + image.url}>
                <img className={styles.img} src={image.url} alt="Slide 1" />
              </div>
            ))}
          </Carousel>
          {window.innerWidth > 1279 && <ProductDescription product={product} />}
        </div>
        <div className={styles.containerProduct}>
          <p className={styles.price}>{price}</p>
          <ProductInfo product={product} />
          <div className={styles.options}>
            <div className={styles.count}>
              <div
                className={styles.function}
                aria-hidden
                onClick={() => countProduct("remove")}
              >
                <Remove />
              </div>
              <p className={styles.result}>{count}</p>
              <div
                className={styles.function}
                aria-hidden
                onClick={() => countProduct("add")}
              >
                <Add />
              </div>
            </div>
            <button
              type="button"
              className={styles.button}
              onClick={handleShopping}
              disabled={enabled}
            >
              <AddShoppingCart />
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
  );
}
