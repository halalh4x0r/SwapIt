import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import ItemList from "../components/ItemList";

function HomePage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch items when the page loads
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data); // default: show all

        // Extract unique categories for filter
        const uniqueCategories = ["All", ...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  // Function to handle filtering
  const handleFilter = (filteredResults) => {
    setFilteredItems(filteredResults);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Listings</h1>

      {/* Amazon-style Filter */}
      <Filter
        items={items}
        categories={categories}
        onFilter={handleFilter}
      />

      {/* Display filtered items */}
      <ItemList items={filteredItems} />
    </div>
  );
}

export default HomePage;