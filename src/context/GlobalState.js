import React, { useCallback, useEffect, useMemo, useState } from "react";
import EcommerceContext from "./EcommerceContext";

function GlobalState({ children }) {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("User"))
  );

  const [favoritesList, setFavoritesList] = useState(
    JSON.parse(localStorage.getItem("Favorites"))
  );
  const [shopping, setShopping] = useState(
    JSON.parse(localStorage.getItem("Shopping"))
  );

  const signInUser = (info, token) => {
    setUserInfo(info);
    localStorage.setItem("User", JSON.stringify([info, token]));
  };

  const logoutUser = () => {
    setUserInfo(null);
    localStorage.removeItem("User");
  };

  const addToCart = useCallback(
    (product) => {
      setShopping([...shopping, product]);
    },
    [shopping]
  );

  const removeToCart = useCallback(
    (product) => {
      setShopping(shopping.filter((shoping) => shoping._id !== product._id));
    },
    [shopping]
  );
  const addFavorites = useCallback(
    (product) => {
      setFavoritesList([...favoritesList, product]);
    },
    [favoritesList]
  );

  const removeFavorites = useCallback(
    (product) => {
      setFavoritesList(
        favoritesList.filter((favorite) => favorite._id !== product._id)
      );
    },
    [favoritesList]
  );

  const value = useMemo(
    () => ({
      userInfo,
      signInUser,
      logoutUser,
      addToCart,
      removeToCart,
      addFavorites,
      removeFavorites,
    }),
    [userInfo, addToCart, removeToCart, addFavorites, removeFavorites]
  );

  useEffect(() => {
    if (shopping) localStorage.setItem("Shopping", JSON.stringify(shopping));
  }, [shopping]);

  useEffect(() => {
    if (favoritesList) {
      localStorage.setItem("Favorites", JSON.stringify(favoritesList));
    }
  }, [favoritesList]);

  return (
    <EcommerceContext.Provider value={value}>
      {children}
    </EcommerceContext.Provider>
  );
}

export default GlobalState;
