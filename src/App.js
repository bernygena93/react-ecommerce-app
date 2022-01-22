/** @format */

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Drawer from "./components/Header/Drawer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer/Footer";
import GlobalState from "./context/GlobalState";
import ProductsFiltered from "./pages/ProductsFiltered";
import ShoppingCart from "./pages/ShoppingCart";
import FavoritesProducts from "./pages/FavoritesProducts";
import ProductSale from "./pages/ProductSale";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggle = (previous) => !previous;

  const drawerToggleClickHandler = () => {
    setDrawerOpen(toggle);
  };

  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Navbar drawerToggle={drawerToggleClickHandler} />
          <Drawer
            drawerToggle={drawerToggleClickHandler}
            drawerOpen={drawerOpen}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/filtered/:type/:name/:id"
              element={<ProductsFiltered />}
            />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/favorites" element={<FavoritesProducts />} />
            <Route path="/product-sale" element={<ProductSale />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
