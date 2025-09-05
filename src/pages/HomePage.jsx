// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import FilterDrawer from "../components/FilterDrawer";
import { useSearchFilter } from "../context/SearchFilterContext";
import "../App.css";

function HomePage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const { searchTerm } = useSearchFilter();

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => {
        const norm = data.map((i) => ({ ...i, inCart: false }));
        setItems(norm);
        setFilteredItems(norm);
        setCategories(["All", ...Array.from(new Set(data.map((i) => i.category || "Uncategorized")) )]);
      })
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  // react to navbar search input
  useEffect(() => {
    if (!searchTerm || !searchTerm.trim()) {
      setFilteredItems(items);
      return;
    }
    const lower = searchTerm.toLowerCase();
    setFilteredItems(
      items.filter(
        (i) =>
          (i.title && i.title.toLowerCase().includes(lower)) ||
          (i.description && i.description.toLowerCase().includes(lower))
      )
    );
  }, [searchTerm, items]);

  // receive filtered array from FilterDrawer -> Filter -> onFilter
  const handleFilterApply = (filteredResults) => {
    setFilteredItems(filteredResults);
  };

  const handleDelete = (id) => {
    const updated = items.filter((i) => i.id !== id);
    setItems(updated);
    setFilteredItems(updated);
  };

  const handleToggleCart = (id) => {
    const updated = items.map((i) => (i.id === id ? { ...i, inCart: !i.inCart } : i));
    setItems(updated);
    setFilteredItems(updated);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Listings</h1>

      {/* Filter drawer toggled from Navbar */}
      <FilterDrawer items={items} categories={categories} onFilter={handleFilterApply} />

      {/* Items list */}
      <ItemList items={filteredItems} onDelete={handleDelete} onToggleCart={handleToggleCart} />
    </div>
  );
}

export default HomePage;
