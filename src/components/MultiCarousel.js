import React, { useState } from "react";
import ArrowBackIos from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import styles from "./styles/multiCarousel.module.css";

export default function MultiCarousel({ children }) {
  const [position, setPosition] = useState(0);
  const style = {
    translate: {
      transform: `translate(${position}%, 0%)`,
      transition: "transform 0.5s",
    },
  };

  const handleCards = (option) => {
    if (option === "next" && position > -200) {
      setPosition((prevState) => prevState - 40);
    } else if (option === "prev" && position < 0) {
      setPosition((prevState) => prevState + 40);
    }
  };

  return (
    <div className={styles.containerCarousel}>
      <div className={styles.carouselInner}>
        <div style={style.translate}>
          <div className={styles.cardContainer}>{children}</div>
        </div>
      </div>
      <button
        type="button"
        className={styles.carouselButton}
        onClick={() => handleCards("prev")}
      >
        <ArrowBackIos />
      </button>
      <button
        type="button"
        className={styles.nextButton}
        onClick={() => handleCards("next")}
      >
        <ArrowForwardIos />
      </button>
    </div>
  );
}
