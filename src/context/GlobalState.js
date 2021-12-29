import { useState } from "react";
import EcommerceContext from "./EcommerceContext";

// eslint-disable-next-line no-unused-vars
function GlobalState(props) {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("User"))
  );
  const [favoriteList, setFavoriteList] = useState(
    JSON.parse(localStorage.getItem("Favorites"))
  );
  const [shopping, setShopping] = useState(
    JSON.parse(localStorage.getItem("Shopping"))
  );

  const signInUser = (info, token) => {
    setUserInfo(info);

    localStorage.setItem("Token", token);
    localStorage.setItem("User", JSON.stringify(info));
    localStorage.setItem("Favorites", JSON.stringify(info.favorites));
    localStorage.setItem("Shopping", JSON.stringify(info.shoppingCart));
  };

  const logoutUser = () => {
    // eslint-disable-next-line object-curly-newline
    setUserInfo(null);
    localStorage.removeItem("User");
    localStorage.removeItem("Token");
    localStorage.removeItem("Favorites");
    localStorage.removeItem("Shopping");
  };

  const addFavorites = (product) => {
    setFavoriteList([...favoriteList, product]);
    localStorage.setItem("Favorites", JSON.stringify(favoriteList));
  };

  const removeFavorites = (product) => {
    setFavoriteList(
      // eslint-disable-next-line array-callback-return
      // eslint-disable-next-line no-underscore-dangle
      favoriteList.filter((favorite) => favorite._id !== product._id)
    );
    localStorage.setItem("Favorites", JSON.stringify(favoriteList));
  };

  const addToCart = (product) => {
    setShopping([...shopping, product]);
    localStorage.setItem("Shopping", JSON.stringify(shopping));
    console.log(shopping);
  };

  const removeToCart = (product) => {
    setShopping(
      // eslint-disable-next-line array-callback-return
      // eslint-disable-next-line no-underscore-dangle
      shopping.filter((shooping) => shooping._id !== product._id)
    );
  };
  return (
    <EcommerceContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        // eslint-disable-next-line object-shorthand
        userInfo: userInfo,
        // eslint-disable-next-line object-shorthand
        signInUser: signInUser,
        // eslint-disable-next-line object-shorthand
        logoutUser: logoutUser,
        // eslint-disable-next-line object-shorthand
        addFavorites: addFavorites,
        // eslint-disable-next-line object-shorthand
        removeFavorites: removeFavorites,
        // eslint-disable-next-line object-shorthand
        addToCart: addToCart,
        // eslint-disable-next-line object-shorthand
        removeToCart: removeToCart,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
}

export default GlobalState;
