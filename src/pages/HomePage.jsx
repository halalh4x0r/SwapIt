// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import ItemList from "../components/ItemList";
import SearchBar from "../components/SearchBar"; //  import SearchBar

function HomePage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => {
        const withCartFlag = data.map((i) => ({ ...i, inCart: false }));
        setItems(withCartFlag);
        setFilteredItems(withCartFlag);
        setCategories(["All", ...new Set(data.map((i) => i.category))]);
      })
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  //  Search handler
  const handleSearch = (term) => {
    if (!term.trim()) {
      setFilteredItems(items); // reset when input empty
    } else {
      const lower = term.toLowerCase();
      const searched = items.filter(
        (i) =>
          i.title.toLowerCase().includes(lower) ||
          (i.description && i.description.toLowerCase().includes(lower))
      );
      setFilteredItems(searched);
    }
  };

  const handleFilter = (filteredResults) => {
    setFilteredItems(filteredResults);
  };

  const handleDelete = (id) => {
    const updated = items.filter((i) => i.id !== id);
    setItems(updated);
    setFilteredItems(updated);
  };

  const handleToggleCart = (id) => {
    const updated = items.map((i) =>
      i.id === id ? { ...i, inCart: !i.inCart } : i
    );
    setItems(updated);
    setFilteredItems(updated);
  };

  const handleSwap = (id) => {
    console.log("Swapped item:", id);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Listings</h1>

      {/*  SearchBar placed here */}
      <SearchBar onSearch={handleSearch} />

      {/* Filter section */}
      <Filter items={items} categories={categories} onFilter={handleFilter} />

      {/* List of items */}
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
