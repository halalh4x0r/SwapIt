import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import CreateListing from "./components/CreateListing";
import AddItemPage from "./pages/AddItemPage";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  // Function to handle adding new items from CreateListing
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <CreateListing onAddItem={handleAddItem} />
        <ItemList items={items} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
