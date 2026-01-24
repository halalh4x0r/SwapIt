import { useState } from "react";

function ItemForm() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setimageURL] = useState("");
    const [price, setPrice] = useState("");
    const [items, setItems] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            title: title,
            category: category,
            description: description,
            image: imageURL,
            price: price
        };

        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error");
                }
                return res.json();
            })
            .then((savedItem) => {
                setItems([...items, savedItem]);
                // Clear form after successful submission
                setTitle("");
                setCategory("");
                setDescription("");
                setimageURL("");
                setPrice("");
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input value={imageURL} onChange={(e) => setimageURL(e.target.value)} placeholder="Image url" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <button type="submit">Add</button>
        </form>
    );
}

export default ItemForm;