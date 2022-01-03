import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import listProducts from "../json/listProducts.json";
import styles from "./styles/detailProducts.module.css";
import EcommerceContext from "../context/EcommerceContext";
import { getProductById } from "../service/productService";
import Spinner from "../components/Spinner";

export default function ProductDetail() {
  const [loading, setLoading] = useState(true);
  const context = useContext(EcommerceContext);
  // eslint-disable-next-line object-curly-newline
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const dues = (product.price / 12).toFixed(2);

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
            <Carousel className={styles.carousel} renderThumbs={() => false}>
              {product.images?.map((image) => (
                <div>
                  <img className={styles.img} src={image.url} alt="Slide 1" />
                </div>
              ))}
            </Carousel>
            <div className={styles.containerProduct}>
              <div className={styles.bodyProduct}>
                <div>
                  <p className={styles.price}>{`$ ${product.price}`}</p>
                  <p className={styles.offers}>
                    {`12 x $ ${dues} sin interes`}
                  </p>
                </div>
                <p className={styles.make}>{product.make}</p>
                <p className={styles.model}>{product.model}</p>
                <p>{product.description}</p>
                <p>{`Stock: ${product.stock}`}</p>
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
                  <AddShoppingCart onClick={handleShopping} />
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
