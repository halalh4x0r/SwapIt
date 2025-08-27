import { useState } from "react";

function Filter({ items, setFilteredItems }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (!value.trim()) {
      setFilteredItems(items);
      return;
    }

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={handleSearch}
        className="border p-2 rounded w-full sm:w-1/2"
      />
    </div>
  );
}

export default Filter;
