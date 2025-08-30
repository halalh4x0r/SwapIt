import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import ItemList from "../components/ItemList";

function HomePage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Fetch your items when the page loads
  useEffect(() => {
    fetch("http://localhost:3000/items") // adjust API URL if needed
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data); // default: show all
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Listings</h1>
      
      {/* Filter Input */}
      <Filter items={items} setFilteredItems={setFilteredItems} />

      {/* Item Cards */}
      <ItemList items={filteredItems} />
    </div>
  );
}

export default HomePage;
