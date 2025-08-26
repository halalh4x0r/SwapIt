// src/store/useItemStore.js
import { create } from "zustand";

const useItemStore = create((set) => ({
  items: [],

  // Fetch items from db.json
  fetchItems: async () => {
    try {
      const res = await fetch("http://localhost:3000/items");
      const data = await res.json();
      set({ items: data });
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  },

  // Add a new item
  addItem: async (newItem) => {
    try {
      const res = await fetch("http://localhost:3000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      const savedItem = await res.json();

      // update local state
      set((state) => ({ items: [...state.items, savedItem] }));
    } catch (error) {
      console.error("Error adding item:", error);
    }
  },
}));

export default useItemStore;
