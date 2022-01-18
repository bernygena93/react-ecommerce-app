import styles from "../styles/dropdown.module.css";
import Items from "./Items";

export default function Dropdown({ items, visible, setVisible, position }) {
  const styleDropdown = visible ? styles.containerView : styles.container;

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div
      className={styleDropdown}
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
      }}
    >
      {items.map((item) => (
        <div
          key={item.path + item.text}
          className={styles.item}
          aria-hidden="true"
          onClick={handleVisible}
        >
          <Items option={item.text} path={item.path} />
        </div>
      ))}
    </div>
  );
}
