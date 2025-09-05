// src/components/FilterDrawer.jsx
import React from "react";
import Filter from "./Filter";
import { useSearchFilter } from "../context/SearchFilterContext";
import "../App.css";

export default function FilterDrawer({ items = [], categories = [], onFilter = () => {} }) {
  const { isFilterOpen, setIsFilterOpen } = useSearchFilter();

  if (!isFilterOpen) return null;

  const handleApply = (filtered) => {
    onFilter(filtered);
    setIsFilterOpen(false);
  };

  return (
    <div className="filter-drawer-overlay" onClick={() => setIsFilterOpen(false)}>
      <aside className="filter-drawer" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>Filters</h3>
          <button className="icon-btn" onClick={() => setIsFilterOpen(false)} aria-label="Close filters">✕</button>
        </div>

        <Filter items={items} categories={categories} onFilter={handleApply} />
      </aside>
    </div>
  );
}
