import React from "react";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import LaptopIcon from "@material-ui/icons/Laptop";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import styles from "../styles/cardCategory.module.css";

export default function CategoryCard({ info }) {
  return (
    <div className={styles.container}>
      {info.name === "Smartphone" && <SmartphoneIcon />}
      {info.name === "Notebook" && <LaptopIcon />}
      {info.name === "Desktop" && <DesktopWindowsIcon />}
      {info.name}
    </div>
  );
}
