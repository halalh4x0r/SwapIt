// src/components/Filter.jsx
import React, { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

function Filter({ items = [], categories = [], onFilter = () => {} }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const applyFilters = () => {
    let filtered = [...items];

    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (searchTerm && searchTerm.trim()) {
      const s = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (item) =>
          (item.title && item.title.toLowerCase().includes(s)) ||
          (item.description && item.description.toLowerCase().includes(s))
      );
    }

    if (priceRange.min) {
      filtered = filtered.filter((item) => Number(item.price) >= Number(priceRange.min));
    }
    if (priceRange.max) {
      filtered = filtered.filter((item) => Number(item.price) <= Number(priceRange.max));
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    onFilter(filtered);
  };

  const handlePriceChange = (field, value) => {
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPriceRange((prev) => ({ ...prev, [field]: value }));
    }
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSortBy("default");
    setPriceRange({ min: "", max: "" });
    setSearchTerm("");
    onFilter(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4">Filter & Sort</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories && categories.length
                ? categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))
                : <option value="All">All</option>
              }
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => handlePriceChange("min", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => handlePriceChange("max", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className="flex items-end gap-2">
            <button type="submit" className="filter-btn">
              <FaFilter /> Apply Filters
            </button>

            <button type="button" onClick={clearFilters} className="clear-btn">
              <FaTimes /> Clear
            </button>
          </div>
        </div>

        {/* internal quick search in the filter panel */}
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search within filters..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
