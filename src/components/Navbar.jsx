import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

function Navbar({ cartCount, onSearch }) {
  return (
    <nav className="navbar">
      <h1>SwapIt</h1>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/create">Create Listing</Link>
        {/*  Cart count now reflects items in cart */}
        <Link to="/checkout" className="cart-link">
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
