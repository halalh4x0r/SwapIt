import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

function ItemCard({ item, onDelete, onToggleCart }) {
  function handleSwapClick() {
    alert(`You want to swap: ${item.title}`);
  }

  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} className="item-image" />
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
        <button 
          className="cart-btn" 
          onClick={() => onToggleCart(item.id)}
        >
          {item.inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
