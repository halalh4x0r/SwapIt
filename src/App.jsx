import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import CreateListing from "./components/CreateListing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/create" element={<CreateListing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
