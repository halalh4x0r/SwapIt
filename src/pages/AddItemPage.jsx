// import { useState } from "react";

// function AddItemPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:3000/items", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...formData, price: parseFloat(formData.price) }),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to add item");
//         return res.json();
//       })
//       .then(() => {
//         setSuccess(true);
//         setFormData({ name: "", description: "", price: "", image: "" });
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
//       <h1 className="text-2xl font-bold mb-4">Add New Item</h1>

//       {success && (
//         <p className="mb-4 text-green-600 font-semibold">
//            Item added successfully!
//         </p>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           ></textarea>
//         </div>

//         <div>
//           <label className="block font-medium">Price ($)</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//         >
//           Add Item
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddItemPage;
