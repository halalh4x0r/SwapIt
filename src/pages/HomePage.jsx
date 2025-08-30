// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import ItemList from "../components/ItemList";

function HomePage() {
  // Store all items fetched from db.json
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch items from db.json on mount
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => {
        // Make sure each item has an inCart property (default: false)
        const withCartFlag = data.map((i) => ({ ...i, inCart: false }));
        setItems(withCartFlag);
        setFilteredItems(withCartFlag);

        // Build unique category list
        setCategories(["All", ...new Set(data.map((i) => i.category))]);
      })
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  // Filter handler (called by Filter component)
  const handleFilter = (filteredResults) => {
    setFilteredItems(filteredResults);
  };

  // Delete handler
  const handleDelete = (id) => {
    const updated = items.filter((i) => i.id !== id);
    setItems(updated);
    setFilteredItems(updated);
  };

  // 🔑 Toggle cart handler
  const handleToggleCart = (id) => {
    const updated = items.map((i) =>
      i.id === id ? { ...i, inCart: !i.inCart } : i
    );
    setItems(updated);
    setFilteredItems(updated); // update filtered too, so UI refreshes
  };

  // Dummy swap handler for now
  const handleSwap = (id) => {
    console.log("Swapped item:", id);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Listings</h1>

      {/* Pass categories and items to Filter */}
      <Filter items={items} categories={categories} onFilter={handleFilter} />

      {/* Render ItemList with handlers */}
      <ItemList
        items={filteredItems}
        onDelete={handleDelete}
        onToggleCart={handleToggleCart}
        onSwap={handleSwap}
      />
    </div>
  );
}

export default HomePage;
