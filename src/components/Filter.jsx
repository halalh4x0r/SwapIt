// src/components/Filter.jsx
import React, { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import "../App.css";

function Filter({ items = [], categories = [], onFilter = () => { } }) {
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
    <div className="filter-panel">
      <h2 className="filter-title">Filter & Sort</h2>

      <form onSubmit={handleSubmit}>
        <div className="filter-grid">
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
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

          <div className="filter-group">
            <label className="filter-label">Price Range</label>
            <div className="price-range-inputs">
              <input
                type="text"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => handlePriceChange("min", e.target.value)}
                className="filter-input"
              />
              <input
                type="text"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => handlePriceChange("max", e.target.value)}
                className="filter-input"
              />
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className="filter-actions">
            <button type="submit" className="filter-btn">
              <FaFilter /> Apply
            </button>

            <button type="button" onClick={clearFilters} className="clear-btn">
              <FaTimes /> Clear
            </button>
          </div>
        </div>

        {/* internal quick search in the filter panel */}
        <div className="filter-group filter-search-group">
          <label className="filter-label">Search</label>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search within filters..."
            className="filter-input"
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
