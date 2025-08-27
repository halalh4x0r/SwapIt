import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

function HomePage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // fetch items from db.json
  useEffect(() => {
    fetch("http://localhost:5000/items") // adjust port if your json-server is different
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      })
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Items</h1>

      {/* filter */}
      <Filter items={items} setFilteredItems={setFilteredItems} />

      {/* item grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow hover:shadow-lg p-4 bg-white"
          >
            <Link to={`/items/${item.id}`}>
              <img
                src={item.image || "https://via.placeholder.com/200"}
                alt={item.name}
                className="w-full h-48 object-contain mb-3"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              {item.price && (
                <p className="text-green-600 font-medium">${item.price}</p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
