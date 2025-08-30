// src/components/ItemList.jsx
import React from "react";
import ItemCard from "./ItemCard";
import "../App.css";

function ItemList({ items, onDelete, onToggleCart, onSwap }) {
  return (
    <div className="item-list">
      <div className="items-grid">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToggleCart={onToggleCart}
            onSwap={onSwap}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
