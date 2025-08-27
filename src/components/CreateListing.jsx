import React, { useState } from "react";
import "../App.css";

function CreateListing() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newItem) => {
        alert("Listing created successfully!");
        console.log(newItem);
        setFormData({
          title: "",
          category: "",
          description: "",
          image: "",
          price: "",
        });
      })
      .catch((err) => console.error("Error creating listing:", err));
  }

  return (
    <form className="create-listing-form" onSubmit={handleSubmit}>
      <h2>Create New Listing</h2>
      <input
        type="text"
        name="title"
        placeholder="Item Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Listing</button>
    </form>
  );
}

export default CreateListing;
