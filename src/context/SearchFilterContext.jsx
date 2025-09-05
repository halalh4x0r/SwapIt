// src/context/SearchFilterContext.jsx
import React, { createContext, useContext, useState } from "react";

const SearchFilterContext = createContext(null);

export function SearchFilterProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <SearchFilterContext.Provider
      value={{ searchTerm, setSearchTerm, isFilterOpen, setIsFilterOpen }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
}

export function useSearchFilter() {
  const ctx = useContext(SearchFilterContext);
  if (!ctx) {
    throw new Error("useSearchFilter must be used within SearchFilterProvider");
  }
  return ctx;
}
