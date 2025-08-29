import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import CreateListing from "./components/CreateListing";
import ItemDetails from "./components/ItemDetails";
import Filter from "./components/Filter";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <main>
        <Routes>
          <Route path="/src/pages/HomePage.jsx" element={<HomePage />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/" element={<ItemList />} />
          <Route path="/create" element={<CreateListing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
