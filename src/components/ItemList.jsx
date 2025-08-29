import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "../App.css";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items") // json-server endpoint
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  // Handle delete
  function handleDelete(id) {
    fetch(`http://localhost:3000/items/${id}`, { method: "DELETE" })
      .then(() => {
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((err) => console.error("Error deleting:", err));
  }

  // Handle add/remove cart toggle
  function handleToggleCart(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, inCart: !item.inCart } : item
    );

    setItems(updatedItems);

    // Update on server too
    const itemToUpdate = updatedItems.find((i) => i.id === id);
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inCart: itemToUpdate.inCart }),
    }).catch((err) => console.error("Error updating cart:", err));
  }

  return (
    <div className="item-list">
      <h2>Available Listings</h2>
      <div className="items-grid">
        {items.map((item) => (
          <ItemCard 
            key={item.id} 
            item={item} 
            onDelete={handleDelete} 
            onToggleCart={handleToggleCart} 
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
