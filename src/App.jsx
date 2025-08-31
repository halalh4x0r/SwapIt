import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import CreateListing from "./components/CreateListing";
import ItemDetails from "./components/ItemDetails";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          {/* Fixed routes - use simple paths, not file paths */}
          <Route path="/" element={<HomePage  />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/create" element={<CreateListing />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );

}

export default App;