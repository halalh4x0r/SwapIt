import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>SwapIt</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create" className="ml-4">
          Create Listing
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
