import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import FloatingCartButton from "./components/FloatingCartButton";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <FloatingCartButton />
    </>
  );
}

export default App;
