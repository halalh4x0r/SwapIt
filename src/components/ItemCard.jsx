// src/components/ItemCard.jsx
import { Link } from "react-router-dom";
import {useState} from "react";
import "../App.css";

function ItemCard({ item, onDelete, onToggleCart, onSwap }) {
  const [cartIds, setCartIds] = useState([]);
  // Handle Swap button
  function handleSwapClick() {
    if (onSwap) onSwap(item.id);
  }
  function handleToggleCart(id) {
  if (cartIds.includes(id)) {
    // remove if already in cart
    setCartIds(cartIds.filter((i) => i !== id));
  } else {
    // add if not in cart
    setCartIds([...cartIds, id]);
  }
}

  return (
    <div className="item-card">
      {/* Item image */}
      <img src={item.image} alt={item.title} className="item-image" />

      {/* Item details */}
      <h3>{item.title}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p>{item.description}</p>
      <p className="item-price">Ksh {item.price}</p>

      {/* Action buttons */}
      <div className="item-actions">
        <button className="swap-btn" onClick={handleSwapClick}>
          Swap It
        </button>

        <Link to={`/items/${item.id}`} className="details-btn">
          View Details
        </Link>

        <button className="delete-btn" onClick={() => onDelete(item.id)}>
          Delete
        </button>

        {/* 🔑 Toggle Add/Remove Cart based on inCart flag */}
        <button className="cart-btn" onClick={() => onToggleCart(item.id)}>
          {item.inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
