import styles from "../styles/dropdown.module.css";
import Items from "./Items";

export default function Dropdown({ items, visible, setVisible }) {
  const styleDropdown = visible ? styles.containerView : styles.container;

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={styleDropdown}>
      {items.map((item) => (
        <div className={styles.item} aria-hidden="true" onClick={handleVisible}>
          <Items option={item.text} path={item.path} />
        </div>
      ))}
    </div>
  );
}
