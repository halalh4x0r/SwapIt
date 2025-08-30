import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "../App.css";

function ItemList() {
  const [items, setItems] = useState([]);
  const [swappedItems, setSwappedItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items") 
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

  // Handle swap
  function handleSwap(id) {
    const itemToSwap = items.find((item) => item.id === id);
    if (!itemToSwap) return; 

    setSwappedItems([...swappedItems, itemToSwap]);
    setItems(items.filter((item) => item.id !== id));
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
            onSwap={handleSwap} 
          />
        ))}
      </div>

      {swappedItems.length > 0 && (
        <div className="swapped-items mt-8">
          <h2>Swapped Items</h2>
          <div className="items-grid">
            {swappedItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onToggleCart={handleToggleCart}
                
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemList;
