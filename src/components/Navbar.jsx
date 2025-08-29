import React from "react";
import HomePage from "../pages/HomePage";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar" >
      <h1>SwapIt</h1>
      <HomePage />
      <div>
        <Link to="/">Home</Link>
        <Link to="/add-item" className="ml-4">
          Add Item
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
