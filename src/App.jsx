// src/App.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/Loading";
import { CartProvider } from "./context/CartContext";
import "./App.css";

// Lazy load all page components
const HomePage = lazy(() => import("./pages/HomePage"));
const ItemList = lazy(() => import("./components/ItemList"));
const ItemDetails = lazy(() => import("./components/ItemDetails"));
const CreateListing = lazy(() => import("./components/CreateListing"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/items" element={<ItemList />} />
              <Route path="/items/:id" element={<ItemDetails />} />
              <Route path="/create" element={<CreateListing />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;