import { useEffect, useState } from "react";

const useLocalStorage = (itemName) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(itemName)) || null
  );

  useEffect(() => {
    localStorage.setItem(itemName, JSON.stringify(value));
  }, [value, itemName]);

  const removeItem = (item) => {
    localStorage.removeItem(item);
  };

  return [value, setValue, removeItem];
};

export default useLocalStorage;
