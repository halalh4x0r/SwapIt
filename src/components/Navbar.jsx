// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaShoppingCart, FaFilter } from "react-icons/fa";
import "../App.css";
import { useSearchFilter } from "../context/SearchFilterContext";

function Navbar({ cartCount = 0 }) {
  // use the context to open/close filter drawer and set search term via SearchBar
  const { setIsFilterOpen, setSearchTerm } = useSearchFilter();

  return (
    <nav className="navbar">
      {/* LEFT: Logo + search + filter icon */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <h1>SwapIt</h1>

        {/* search box in navbar (left side, like e-commerce) */}
        <div className="navbar-search" aria-hidden={false}>
          {/* pass setSearchTerm so search updates global state instantly */}
          <SearchBar onSearch={(term) => setSearchTerm(term)} />
        </div>

        {/* filter icon (small) */}
        <button
          aria-label="Open filters"
          title="Filter"
          className="icon-btn"
          onClick={() => setIsFilterOpen(true)}
          style={{ marginLeft: 6 }}
        >
          <FaFilter />
        </button>
      </div>

      {/* RIGHT: Links + cart (unchanged layout) */}
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/create">Create Listing</Link>

        <Link to="/checkout" className="cart-link" aria-label="Cart">
          <div className="cart-container">
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
