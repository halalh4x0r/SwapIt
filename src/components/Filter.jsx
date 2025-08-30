import { useState } from "react";
import "../index.css";

function Filter({ items, setFilteredItems }) {
  const [query, setQuery] = useState("");
  

  const handleFilter = () => {
    if (query.trim() === "") {
      setFilteredItems(items); // show all if empty
    } else {
      const filtered = items.filter((item) =>
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter by category..."
        className="border px-3 py-1 rounded w-64"
      />
      <button
        onClick={handleFilter}
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Apply Filter
      </button>
    </div>
  );
}

export default Filter;
