/** @format */

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import "./App.css";
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import Drawer from "./components/Header/Drawer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer/Footer";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggle = (previous) => !previous;

  const drawerToggleClickHandler = () => {
    setDrawerOpen(toggle);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar drawerToggle={drawerToggleClickHandler} />
        <Drawer
          drawerToggle={drawerToggleClickHandler}
          drawerOpen={drawerOpen}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
