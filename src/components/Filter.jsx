import React from "react";

function Filter({ onFilter }) {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="category">Filter by Category: </label>
      <select id="category" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Books">Books</option>
        <option value="Home">Home</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
        <option value="Sports">Sports</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default Filter;
