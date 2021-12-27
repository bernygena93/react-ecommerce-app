import React from "react";
import { Carousel } from "react-responsive-carousel";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import listProducts from "../json/listProducts.json";
import styles from "./styles/detailProduts.module.css";

export default function DetailProduct() {
  return (
    <>
      <Carousel renderThumbs={() => false}>
        <div>
          <img src={listProducts[0].imagen} alt="Slide 1" />
        </div>
      </Carousel>
      <div className={styles.container}>
        <div className={styles.bodyProduct}>
          <h3 className={styles.mark}>{listProducts[0].marca}</h3>
          <h2>{listProducts[0].modelo}</h2>
          <p>{listProducts[0].descripcion}</p>
          <small>{`Stock: ${listProducts[0].cantidad}`}</small>
          <div>
            <h1 className={styles.price}>{`$ ${listProducts[0].precio}`}</h1>
            <h3>
              {`12 x $ ${(listProducts[0].precio / 12).toFixed(2)} sin interes`}
            </h3>
          </div>
        </div>
        <div className={styles.count}>
          <div className={styles.function}>
            <Remove />
          </div>
          <p>0</p>
          <div className={styles.function}>
            <Add />
          </div>
        </div>
        <button type="button" className={styles.button}>
          <AddShoppingCart />
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
