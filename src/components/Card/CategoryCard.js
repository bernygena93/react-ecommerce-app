import React from "react";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import LaptopIcon from "@material-ui/icons/Laptop";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import TabletAndroid from "@material-ui/icons/TabletAndroid";
import Headset from "@material-ui/icons/Headset";
import styles from "../styles/cardCategory.module.css";

export default function CategoryCard({ info }) {
  return (
    <div className={styles.container}>
      {info.name === "Smartphone" && <SmartphoneIcon />}
      {info.name === "Laptop" && <LaptopIcon />}
      {info.name === "Desktop" && <DesktopWindowsIcon />}
      {info.name === "Accesorios" && <Headset />}
      {info.name === "Tablet" && <TabletAndroid />}
      {info.name}
    </div>
  );
}
