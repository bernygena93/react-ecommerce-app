import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import listProducts from "../json/listProducts.json";
import styles from "./styles/detailProducts.module.css";

export default function DetailProduct() {
  const [count, setCount] = useState(0);
  const dues = (listProducts[0].price / 12).toFixed(2);

  const countProduct = (op) => {
    if (op === "remove" && count > 0) {
      setCount((prevState) => prevState - 1);
    } else if (op === "add" && count < listProducts[0].stock) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Carousel>
          <div className={styles.carousel}>
            <img
              className={styles.img}
              src={listProducts[0].image}
              alt="Slide 1"
            />
          </div>
        </Carousel>
        <div className={styles.divider}>{}</div>
        <div className={styles.containerProduct}>
          <div className={styles.bodyProduct}>
            <h3 className={styles.mark}>{listProducts[0].mark}</h3>
            <h2>{listProducts[0].model}</h2>
            <p>{listProducts[0].description}</p>
            <h4>{`Stock: ${listProducts[0].stock}`}</h4>
            <div>
              <h1 className={styles.price}>{`$ ${listProducts[0].price}`}</h1>
              <h4 className={styles.offers}>{`12 x $ ${dues} sin interes`}</h4>
            </div>
          </div>
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
              <AddShoppingCart />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
