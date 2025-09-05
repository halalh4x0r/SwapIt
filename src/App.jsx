// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";  // ❌ remove BrowserRouter here
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateListing from "./components/CreateListing";
import CheckoutPage from "./pages/CheckoutPage";
import { SearchFilterProvider } from "./context/SearchFilterContext";
import { CartProvider } from "./context/CartContext";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <CartProvider>
      <SearchFilterProvider>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage items={items} setCart={setCart} />} />
          <Route path="/create" element={<CreateListing />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        </Routes>
      </SearchFilterProvider>
    </CartProvider>
  );
}

export default App;
