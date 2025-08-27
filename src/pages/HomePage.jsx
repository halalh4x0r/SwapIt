// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Available Items</h1>

      {items.length === 0 ? (
        <p>No items found. Please add some!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow hover:shadow-lg bg-white p-4"
            >
              <Link to={`/items/${item.id}`}>
                <img
                  src={item.image || "https://via.placeholder.com/200"}
                  alt={item.name}
                  className="w-full h-48 object-contain mb-3"
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                {item.price && (
                  <p className="text-green-600 font-bold">${item.price}</p>
                )}
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
