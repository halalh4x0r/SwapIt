import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../App.css";

function Navbar({ cartCount, onSearch }) {
  return (
    <nav className="navbar">
      <h1>SwapIt</h1>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/create">Create Listing</Link>
        {/* 🔑 Cart count now reflects items in cart */}
        <Link to="/checkout">🛒 Cart ({cartCount})</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
