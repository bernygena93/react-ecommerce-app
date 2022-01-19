import React, { useCallback, useEffect, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import EcommerceContext from "./EcommerceContext";

function GlobalState({ children }) {
  const [userInfo, setUserInfo, cleanUserInfo] = useLocalStorage("User");
  const [favorites, setFavorites, cleanFavorites] =
    useLocalStorage("Favorites");
  const [shopping, setShopping, cleanShopping] = useLocalStorage("Shopping");

  const signInUser = useCallback(
    (info) => {
      setUserInfo([info.data, info.token]);
      setFavorites([]);
      setShopping([]);
    },
    [setUserInfo, setFavorites, setShopping]
  );

  const logoutUser = useCallback(() => {
    cleanUserInfo("User");
    cleanFavorites("Favorites");
    cleanShopping("Shopping");
  }, [cleanUserInfo, cleanFavorites, cleanShopping]);

  const addToCart = useCallback(
    (product) => {
      setShopping([...shopping, product]);
    },
    [shopping, setShopping]
  );

  const removeToCart = useCallback(
    (id) => {
      setShopping(shopping.filter((item) => item.product._id !== id));
    },
    [setShopping, shopping]
  );

  const addFavorites = useCallback(
    (product) => {
      setFavorites([...favorites, product]);
    },
    [favorites, setFavorites]
  );

  const removeFavorites = useCallback(
    (id) => {
      setFavorites(favorites.filter((favorite) => favorite.product._id !== id));
    },
    [favorites, setFavorites]
  );

  const value = useMemo(
    () => ({
      userInfo,
      favorites,
      shopping,
      signInUser,
      logoutUser,
      addToCart,
      removeToCart,
      addFavorites,
      removeFavorites,
    }),
    [
      userInfo,
      favorites,
      shopping,
      signInUser,
      logoutUser,
      removeFavorites,
      addToCart,
      removeToCart,
      addFavorites,
    ]
  );

  useEffect(() => {
    localStorage.setItem("Shopping", JSON.stringify(shopping));
  }, [shopping]);

  return (
    <EcommerceContext.Provider value={value}>
      {children}
    </EcommerceContext.Provider>
  );
}

export default GlobalState;
