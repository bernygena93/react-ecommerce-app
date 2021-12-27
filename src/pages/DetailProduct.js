import React from "react";
import { Carousel } from "react-responsive-carousel";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import listProducts from "../json/listProducts.json";
import styles from "./styles/detailProducts.module.css";

export default function DetailProduct() {
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
              <h4 className={styles.offers}>
                {`12 x $ ${(listProducts[0].price / 12).toFixed(
                  2
                )} sin interes`}
              </h4>
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.count}>
              <div className={styles.function}>
                <Remove />
              </div>
              <p className={styles.result}>0</p>
              <div className={styles.function}>
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
