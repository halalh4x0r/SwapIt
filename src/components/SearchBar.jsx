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
    <form onSubmit={handleSubmit} className="search-form" role="search">
      <input
        type="text"
        placeholder="Search items..."
        value={term}
        onChange={handleChange}
        className="search-input"
        aria-label="Search items"
      />
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
}

export default SearchBar;
