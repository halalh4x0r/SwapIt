// src/App.jsx
import React, { useEffect } from "react";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";


function App() {
  const { items, fetchItems } = useItemStore();

  useEffect(() => {
    fetchItems(); // Load items from db.json when app starts
  }, [fetchItems]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">
          🌍 Neighborhood Swap
        </h1>
        <p className="text-gray-600">Share, swap, and save together</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Add Item */}
        <section className="md:col-span-1">
          <ItemForm />
        </section>

        {/* Right: Item List */}
        <section className="md:col-span-2">
          <ItemList items={items} />
        </section>
      </main>
    </div>
  );
}

export default App;