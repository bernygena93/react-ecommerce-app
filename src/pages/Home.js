/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./styles/home.module.css";
import CardProduct from "../components/Product/CardProduct";
import listProducts from "../json/listProducts.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
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
            src="https://tecnoreviews.online/wp-content/uploads/2019/10/jogando-games-e1557753239146.jpg"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://solun.tech/wp-content/uploads/2021/02/4.png"
            alt="Slide 3"
          />
        </div>
      </Carousel>
      <h2>Destacados de esta semana</h2>
      <div className={styles.container}>
        {listProducts.map((product) => (
          <CardProduct info={product} />
        ))}
      </div>
    </div>
  );
}
