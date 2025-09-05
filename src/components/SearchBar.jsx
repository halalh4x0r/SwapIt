// src/components/SearchBar.jsx
import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  // update parent on every keystroke (good e-comm UX)
  const handleChange = (e) => {
    const v = e.target.value;
    setTerm(v);
    if (onSearch) onSearch(v);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2" role="search">
      <input
        type="text"
        placeholder="Search items..."
        value={term}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search items"
      />
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
}

export default SearchBar;
