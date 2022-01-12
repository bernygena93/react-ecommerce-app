import { useEffect, useRef, useState } from "react";

export default function useOutsideSelect() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        console.log("entro en el return");
        return;
      }
      setIsVisible(false);
      console.log("entro fuera del return");
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, setIsVisible, isVisible]);
  return {
    ref,
    isVisible,
    setIsVisible,
  };
}
