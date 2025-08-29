import React, { useEffect, useState } from "react";
import "../App.css";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/items") // json-server endpoint
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <div className="item-list">
      <h2>Available Listings</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} className="item-image" />
            <h3>{item.title}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p>{item.description}</p>
            <p className="item-price">Ksh {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
